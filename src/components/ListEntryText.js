import React from 'react';

const ListEntryText = (props) => {
  return (
    <div className= 'list-entry'>
      <div className= 'content'>{props.title}</div>
      <div className= 'content' dangerouslySetInnerHTML={{__html: props.body}}></div>
      <button onClick= {() => props.handleClick(props.id)}>{props.button}</button>
    </div>
  );
};

export default ListEntryText;