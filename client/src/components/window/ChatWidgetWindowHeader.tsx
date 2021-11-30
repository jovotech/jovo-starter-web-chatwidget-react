import React, { VFC } from 'react';

export interface ChatWidgetWindowHeaderProps {
  onClose: () => unknown;
}

const ChatWidgetWindowHeader: VFC<ChatWidgetWindowHeaderProps> = (props) => {
  return (
    <div className="flex-shrink-0 rounded-t-xl border-b px-8 py-6 bg-primary text-white flex items-center justify-between">
      <h3 className="text-base font-bold">Jovo Sample Bot</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 sm:hidden cursor-pointer hover:text-gray-100"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={props.onClose}
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default ChatWidgetWindowHeader;
