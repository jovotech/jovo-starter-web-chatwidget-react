import React, { VFC } from 'react';
import ChatWidgetWindowBody from './ChatWidgetWindowBody';
import ChatWidgetWindowFooter from './ChatWidgetWindowFooter';
import ChatWidgetWindowHeader from './ChatWidgetWindowHeader';

export interface ChatWidgetWindowProps {
  onClose: () => unknown;
}

const ChatWidgetWindow: VFC<ChatWidgetWindowProps> = (props) => {
  return (
    <div className="sm:mb-6 flex-1 overflow-y-hidden flex flex-col border border-gray-400 rounded-xl sm:w-96 shadow-xl">
      <ChatWidgetWindowHeader onClose={props.onClose} />
      <ChatWidgetWindowBody />
      <ChatWidgetWindowFooter />
    </div>
  );
};

export default ChatWidgetWindow;
