import { Input, NormalizedOutputTemplate } from '@jovotech/client-web';

export interface RequestConversationPart {
  type: 'request';
  data: Input;
}

export interface ResponseConversationPart {
  type: 'response';
  data: NormalizedOutputTemplate;
}

export type ConversationPart = RequestConversationPart | ResponseConversationPart;
