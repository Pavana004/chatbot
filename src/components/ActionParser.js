import React from 'react';


const ActionProvider = ({ createChatBotMessage, setState, children}) => {


  const handleGotIt = () => {
    const StartMessage = createChatBotMessage('got it', {
      type: "user"
    });
    updateState(StartMessage);

    const nextMessage = createChatBotMessage('Enter Your Name');
    updateState(nextMessage,"age");

  };

  const handleAge = () => {
    const StartMessage = createChatBotMessage('Enter Your Age', {
      widget: 'dropdown'
    });
    updateState(StartMessage,"count");
   
  };

  const handleCount = () => {
    const StartMessage = createChatBotMessage(`Thank you, In 5 seconds bot will exit`, {
      widget: 'countDown',
    });
    updateState(StartMessage);

  }

  const updateState = (message, validation = "") => {

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      validation
    }));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            handleAge,
            handleCount,
          
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;