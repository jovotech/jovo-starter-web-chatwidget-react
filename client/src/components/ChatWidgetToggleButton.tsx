import React, { VFC } from 'react';
import { cls } from '../utils';
import { Transition } from '@headlessui/react';

export interface ChatWidgetToggleButtonProps {
  isWindowVisible: boolean;
  onClick: (event: React.MouseEvent) => unknown;
}

const ChatWidgetToggleButton: VFC<ChatWidgetToggleButtonProps> = (props) => {
  return (
    <button
      className={cls(
        'ml-auto flex-shrink-0 bg-primary w-16 h-16 flex items-center justify-center rounded-full text-white shadow-xl focus:outline-none',
        {
          'hidden sm:flex': props.isWindowVisible,
        },
      )}
      onClick={props.onClick}
    >
      <Transition show={!props.isWindowVisible} enter="transition-opacity duration-150" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-150 absolute" leaveFrom="opacity-100" leaveTo="opacity-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </Transition>
      <Transition show={props.isWindowVisible} enter="transition-opacity duration-150" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-150 absolute" leaveFrom="opacity-100" leaveTo="opacity-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </Transition>
      {/*{!props.isWindowVisible ? (*/}

      {/*) : (*/}
      {/*  <svg*/}
      {/*    key="active"*/}
      {/*    xmlns="http://www.w3.org/2000/svg"*/}
      {/*    className="h-8 w-8"*/}
      {/*    fill="none"*/}
      {/*    viewBox="0 0 24 24"*/}
      {/*    stroke="currentColor"*/}
      {/*  >*/}
      {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />*/}
      {/*  </svg>*/}
      {/*)}*/}
    </button>
  );
};

export default ChatWidgetToggleButton;
