import { VFC } from 'react';
import ChatWidgetConversation from '../conversation/ChatWidgetConversation';

export interface ChatWidgetWindowBodyProps {}

const ChatWidgetWindowBody: VFC<ChatWidgetWindowBodyProps> = (props) => {
  return (
    <div className="flex-1 overflow-hidden flex bg-gray-300">
      <ChatWidgetConversation />
    </div>
  );
};

export default ChatWidgetWindowBody;
