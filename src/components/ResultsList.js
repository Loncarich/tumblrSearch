import React from 'react';
import ListEntryPhoto from './ListEntryPhoto';
import ListEntryVideo from './ListEntryVideo';
import ListEntryText from './ListEntryText';
import ListEntryQuote from './ListEntryQuote';
import ListEntryLink from './ListEntryLink';

const ResultsList = (props) => {
  const resultsListEntries = props.results.map((result) => {
     switch(result.type) {
         case 'text':
             return <ListEntryText
                      key= {result.id}
                      title= {result.title}
                      body= {result.body}
                      id= {result.id}
                      handleClick= {props.handleAddClick}
                      button= 'Add'
                    />
         case 'photo':
             return <ListEntryPhoto
                      key= {result.id}
                      photos= {result.photos}
                      caption= {result.caption}
                      id= {result.id}
                      handleClick= {props.handleAddClick}
                      button= 'Add'
                    />
         case 'video':
             return <ListEntryVideo
                      key= {result.id}
                      video= {result.video_url}
                      caption= {result.caption}
                      id= {result.id}
                      handleClick= {props.handleAddClick}
                      button= 'Add'
                    />
         case 'quote':
             return <ListEntryQuote
                      key= {result.id}
                      text= {result.text}
                      source= {result.source}
                      id= {result.id}
                      handleClick= {props.handleAddClick}
                      button= 'Add'
                    />
         case 'link':
              return <ListEntryLink
                       key= {result.id}
                       title= {result.title}
                       image= {result.link_image}
                       url= {result.url}
                       description= {result.description}
                       id= {result.id}
                       handleClick= {props.handleAddClick}
                       button= 'Add'
                     />
     }
  });
  return (
    <div className= 'results'>
      <div className= 'result-wrapper'>
        {(resultsListEntries.length === 0 && props.hasSearched === true) ?
          'No Search Results Available' :
          resultsListEntries
        }
      </div>
    </div>
  );
};

export default ResultsList;