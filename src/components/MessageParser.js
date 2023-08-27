import React from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/contactSlice';

const MessageParser = ({ children, actions }) => {

  const dispatch = useDispatch()
  console.log(children)


  const parse = (message) => {


    if (children.props.state.validation === "age") {
      actions.handleAge();
      dispatch(setName(message));
    }

    if (children.props.state.validation === "count") {
      actions.handleCount();
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;