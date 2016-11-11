import React from 'react';
import ListEntryPhoto from './ListEntryPhoto';
import ListEntryVideo from './ListEntryVideo';
import ListEntryText from './ListEntryText';
import ListEntryQuote from './ListEntryQuote';
import ListEntryLink from './ListEntryLink';

const FavoritesList = (props) => {
  const favoritesListEntries = props.favorites.map((result) => {
     switch(result.type) {
         case 'text':
             return <ListEntryText
                      key= {result.id}
                      title= {result.title}
                      body= {result.body}
                      id= {result.id}
                      handleClick= {props.handleRemoveClick}
                      button= 'Remove'
                    />
         case 'photo':
             return <ListEntryPhoto
                      key= {result.id}
                      photos= {result.photos}
                      caption= {result.caption}
                      id= {result.id}
                      handleClick= {props.handleRemoveClick}
                      button= 'Remove'
                    />
         case 'video':
             return <ListEntryVideo
                      key= {result.id}
                      video= {result.video_url}
                      caption= {result.caption}
                      id= {result.id}
                      handleClick= {props.handleRemoveClick}
                      button= 'Remove'
                    />
          case 'quote':
              return <ListEntryQuote
                       key= {result.id}
                       text= {result.text}
                       source= {result.source}
                       id= {result.id}
                       handleClick= {props.handleRemoveClick}
                       button= 'Remove'
                     />
          case 'link':
               return <ListEntryLink
                        key= {result.id}
                        title= {result.title}
                        image= {result.link_image}
                        url= {result.url}
                        description= {result.description}
                        id= {result.id}
                        handleClick= {props.handleRemoveClick}
                        button= 'Remove'
                      />
     }
  });
  return (
    <div className= 'favorites'>
      <div className= 'favorites-title'>Favorites:</div>
        <div className= 'result-wrapper'>
          {favoritesListEntries}
        </div>
    </div>
  );
};

export default FavoritesList;