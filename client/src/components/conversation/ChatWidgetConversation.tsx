import { ClientEvent } from '@jovotech/client-web';
import { useContext, useEffect, useRef, VFC } from 'react';
import client from '../../client';
import { ConversationContext } from '../ChatWidget';
import ChatWidgetConversationPart from './ChatWidgetConversationPart';

export interface ChatWidgetConversationProps {}

const ChatWidgetConversation: VFC<ChatWidgetConversationProps> = (props) => {
  const conversationParts = useContext(ConversationContext);

  const conversationPartsWithQuickRepliesOnlyInLast = conversationParts.map((part, index) => {
    return index !== conversationParts.length - 1 && part.type === 'response'
      ? { ...part, data: { ...part.data, quickReplies: undefined } }
      : part;
  });

  const element = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (!element.current) return;
    element.current.scrollTop = element.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationParts]);

  return (
    <div
      ref={element}
      className="flex-grow flex flex-col space-y-4 px-6 py-4 overflow-y-scroll scrollbar-invisible hover:scrollbar"
    >
      {conversationPartsWithQuickRepliesOnlyInLast.map((part, index) => (
        <ChatWidgetConversationPart part={part} key={index} />
      ))}
    </div>
  );
};

export default ChatWidgetConversation;
