import { NormalizedOutputTemplate, QuickReplyValue } from '@jovotech/client-web';
import React, { VFC } from 'react';
import MessageDisplay from './MessageDisplay';
import QuickReplyDisplay from './QuickReplyDisplay';

export interface OutputTemplateDisplayProps {
  output: NormalizedOutputTemplate;
  onQuickReplyClick?: (quickReply: QuickReplyValue) => unknown;
}

const OutputTemplateDisplay: VFC<OutputTemplateDisplayProps> = ({ output, onQuickReplyClick }) => {
  return (
    <div className="space-y-2 inline-flex flex-col">
      {output.message && <MessageDisplay message={output.message} className="bg-white" />}

      {output.quickReplies?.length && (
        <div className="space-x-2">
          {output.quickReplies.map((quickReply, index) => (
            <QuickReplyDisplay
              quickReply={quickReply}
              key={index}
              onClick={() => {
                onQuickReplyClick?.(quickReply);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default OutputTemplateDisplay;
