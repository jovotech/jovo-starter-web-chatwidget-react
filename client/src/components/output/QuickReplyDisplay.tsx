import { QuickReplyValue } from '@jovotech/client-web';
import React, { VFC } from 'react';

export interface QuickReplyDisplayProps {
  quickReply: QuickReplyValue;
  onClick?: (event: React.MouseEvent) => unknown;
}

const QuickReplyDisplay: VFC<QuickReplyDisplayProps> = (props) => {
  const text = typeof props.quickReply === 'string' ? props.quickReply : props.quickReply.text;
  return (
    <button
      className="quick-reply-display inline-flex items-center border shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:cursor-not-allowed ml-auto rounded-full border-transparent text-gray-700 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 px-4 py-2 text-sm rounded-md"
      onClick={props.onClick}
    >
      <p>{text}</p>
    </button>
  );
};

export default QuickReplyDisplay;
