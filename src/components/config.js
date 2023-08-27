import { createChatBotMessage } from 'react-chatbot-kit';
import GotIt from './GotIt';
import DropDown from './DropDown';
import Count from './Count';

const config = {
  botName: "task",
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`,{
      
     widget:'gotIt',
  })],
  widgets: [
        {
          widgetName: 'gotIt',
          widgetFunc: (props) => <GotIt {...props} />
        },
        {
          widgetName: 'dropdown',
          widgetFunc: (props) => <DropDown {...props} />
        },
        {
          widgetName: 'countDown',
          widgetFunc: (props) => <Count {...props} />
        },

  ]
};

export default config;