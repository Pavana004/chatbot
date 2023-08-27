import React from 'react';
import { Chatbot} from 'react-chatbot-kit';
import MessageParser from './MessageParser';
import ActionProvider from './ActionParser';
import 'react-chatbot-kit/build/main.css'
import config from './config';



function ChatbotPage() {

  



  return (
    <div className="bg-slate-950 flex text-center h-screen justify-center ">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        headerText='Chatbot Task'
      />
    </div>
  );
}

export default ChatbotPage;
