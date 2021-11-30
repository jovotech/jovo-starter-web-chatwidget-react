import { Transition } from '@headlessui/react';
import {
  ClientEvent,
  ClientRequest,
  InputType,
  NormalizedOutputTemplate,
} from '@jovotech/client-web';
import React, { createContext, useEffect, useState, VFC } from 'react';
import client from '../client';
import { ConversationPart } from '../types';
import { cls } from '../utils';
import ChatWidgetToggleButton from './ChatWidgetToggleButton';
import ChatWidgetWindow from './window/ChatWidgetWindow';

export const ConversationContext = createContext<ConversationPart[]>([]);

const ChatWidget: VFC = () => {
  const [conversationParts, setConversationParts] = useState([] as ConversationPart[]);

  const onRequest = (request: ClientRequest) => {
    setConversationParts((parts) => [
      ...parts,
      {
        type: 'request',
        data: request.input || {},
      },
    ]);
  };

  const onOutput = (output: NormalizedOutputTemplate) => {
    setConversationParts((parts) => [
      ...parts,
      {
        type: 'response',
        data: output,
      },
    ]);

    // custom property just used for this example to redirect to a given website
    const redirectTo = output.platforms?.web?.redirectTo;
    if (typeof redirectTo === 'string' && redirectTo) {
      setTimeout(() => {
        window.open(redirectTo, '_blank');
      }, 800);
    }
  };

  useEffect(() => {
    client.on(ClientEvent.Request, onRequest);
    client.on(ClientEvent.Output, onOutput);
    return () => {
      client.off(ClientEvent.Request, onRequest);
      client.off(ClientEvent.Output, onOutput);
    };
  });

  const [isWindowVisible, setIsWindowVisible] = useState(false);

  const onToggleButtonClick = async (event: React.MouseEvent) => {
    setIsWindowVisible(!isWindowVisible);
    if (!client.isInitialized) {
      await client.initialize();
      await client.send({ type: InputType.Launch });
    }
  };

  const onWindowClose = () => {
    setIsWindowVisible(false);
  };

  return (
    <ConversationContext.Provider value={conversationParts}>
      <div
        className={cls(
          'flex flex-col fixed left-0.5 right-0.5 bottom-0.5 sm:left-auto sm:right-2 sm:bottom-2 sm:max-h-3/4',
          {
            'top-0.5 sm:top-auto': isWindowVisible,
          },
        )}
      >
        <Transition
          show={isWindowVisible}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ChatWidgetWindow onClose={onWindowClose} />
        </Transition>
        <ChatWidgetToggleButton isWindowVisible={isWindowVisible} onClick={onToggleButtonClick} />
      </div>
    </ConversationContext.Provider>
  );
};

export default ChatWidget;
