import { observer } from 'mobx-react-lite';
import React, { VFC } from 'react';
import ChatWidget from './components/ChatWidget';

const App: VFC = observer((props) => {
  return (
    <div className="w-screen h-screen bg-gray-300">
      <ChatWidget />
    </div>
  );
});

export default App;
