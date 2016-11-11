import React from 'react';

const ListEntryQuote = (props) => {
  return (
    <div className= 'list-entry'>
      <div className= 'content'>{props.text}</div>
      <div className= 'content' dangerouslySetInnerHTML={{__html: props.source}}></div>
      <button onClick= {() => props.handleClick(props.id)}>{props.button}</button>
    </div>
  );
};

export default ListEntryQuote;