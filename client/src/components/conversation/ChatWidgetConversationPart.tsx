import { Input, InputType, QuickReplyValue } from '@jovotech/client-web';
import React, { VFC } from 'react';
import client from '../../client';
import { ConversationPart, RequestConversationPart } from '../../types';
import MessageDisplay from '../output/MessageDisplay';
import OutputTemplateDisplay from '../output/OutputTemplateDisplay';

export interface ChatWidgetConversationPartProps {
  part: ConversationPart;
}

const ChatWidgetConversationPart: VFC<ChatWidgetConversationPartProps> = ({ part }) => {
  function isRequest(aPart: ConversationPart): aPart is RequestConversationPart {
    return aPart.type === 'request';
  }

  const onQuickReplyClick = (quickReply: QuickReplyValue) => {
    const input: Input =
      typeof quickReply === 'string'
        ? { type: InputType.Text, text: quickReply }
        : quickReply.intent
        ? {
            type: InputType.Intent,
            text: quickReply.value || quickReply.text,
            intent: quickReply.intent,
            entities: quickReply.entities,
          }
        : { type: InputType.Text, text: quickReply.value || quickReply.text };
    return client.send(input);
  };

  return (
    <div className={`max-w-3/4 inline ${isRequest(part) ? 'self-end' : 'self-start'}`}>
      {isRequest(part) ? (
        <MessageDisplay message={part.data.text || part.data.type || ''} className="bg-primary text-white" />
      ) : (
        <OutputTemplateDisplay output={part.data} onQuickReplyClick={onQuickReplyClick} />
      )}
    </div>
  );
};

export default ChatWidgetConversationPart;
