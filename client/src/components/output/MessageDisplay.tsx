import { MessageValue } from '@jovotech/client-web';
import { VFC } from 'react';

export interface MessageDisplayProps {
  message: MessageValue;
  className?: string;
}

function removeSSML(ssml: string): string {
  return ssml.replace(/<[^>]*>/g, '');
}

const MessageDisplay: VFC<MessageDisplayProps> = (props) => {
  const text =
    typeof props.message === 'string'
      ? props.message
      : props.message.text || removeSSML(props.message.speech || '');

  const className = `inline-flex px-4 py-2 rounded-xl text-sm shadow-sm${
    props.className ? ` ${props.className}` : ''
  }`;

  return (
    <div className={className}>
      <p className="leading-6">{text}</p>
    </div>
  );
};

export default MessageDisplay;
