import React from 'react';

const ListEntryPhoto = (props) => {
  const photosList= props.photos.map((photo) => {
    return <li key= {props.photos.indexOf(photo)}><img src= {photo.alt_sizes[2].url}></img></li>
  });

  return (
    <div className= 'list-entry'>
      <div className= 'content'>
        <ul>{photosList}</ul>
        <div dangerouslySetInnerHTML={{__html: props.caption}}></div>
      </div>
      <button onClick= {() => props.handleClick(props.id)}>{props.button}</button>
    </div>
  );
};

export default ListEntryPhoto;