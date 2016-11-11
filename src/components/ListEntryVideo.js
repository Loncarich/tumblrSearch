import React from 'react';

const ListEntryVideo = (props) => {
  return (
    <div className= 'list-entry'>
      <div className= 'content'>
        <video width="320" height="240" controls>
          <source src={props.video} type="video/mp4"></source>
        </video>
        <div dangerouslySetInnerHTML={{__html: props.caption}}></div>
      </div>
      <button onClick= {() => props.handleClick(props.id)}>{props.button}</button>
    </div>
  );
};

export default ListEntryVideo;