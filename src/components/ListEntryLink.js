import React from 'react';

const ListEntryLink = (props) => {
  return (
    <div className= 'list-entry'>
      <div className= 'content'>{props.title}</div>
      <div className= 'content'>
        <a href= {props.url} target="_blank"><img src= {props.image}></img></a>
        <div dangerouslySetInnerHTML={{__html: props.description}}></div>
      </div>
      <button onClick= {() => props.handleClick(props.id)}>{props.button}</button>
    </div>
  );
};

export default ListEntryLink;