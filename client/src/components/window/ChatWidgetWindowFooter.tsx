import { ClientEvent, InputType } from '@jovotech/client-web';
import React, { useEffect, useRef, useState, VFC } from 'react';
import client from '../../client';

export interface ChatWidgetWindowFooterProps {}

const ChatWidgetWindowFooter: VFC<ChatWidgetWindowFooterProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onRequest = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
    client.on(ClientEvent.Request, onRequest);
    return () => {
      client.off(ClientEvent.Request, onRequest);
    };
  });

  const [text, setText] = useState('');

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onKeyPress = async (event: React.KeyboardEvent) => {
    if (
      event.key.toLowerCase() === 'enter' &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey &&
      !event.metaKey
    ) {
      await sendText();
    }
  };

  const sendText = async () => {
    if (!text) return;
    await client.send({
      type: InputType.Text,
      text,
    });
    setText('');
  };

  return (
    <div className="flex-shrink-0 rounded-b-xl border-t p-6 bg-white flex items-center">
      <input
        ref={inputRef}
        className="flex-grow focus:outline-none text-sm"
        placeholder="Type something and press Enter..."
        value={text}
        onChange={onTextChange}
        onKeyPress={onKeyPress}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 cursor-pointer text-primary hover:text-gray-800 transform rotate-45"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={sendText}
      >
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    </div>
  );
};

export default ChatWidgetWindowFooter;
