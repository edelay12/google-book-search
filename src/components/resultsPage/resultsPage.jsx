import React from 'react';
import ListItem from './ListItem'

export default function Result(props) {
    return (
        <div>
            <h1>Results</h1> <hr/>
           {props.li.items.map((li, index) => 
                    <ListItem 
                    
                        title= {li.volumeInfo.title}
                        author ={li.volumeInfo.authors.toString()}
                        bio={li.searchInfo.textSnippet === undefined|| null || '' ? ' ' : li.searchInfo.textSnippet }
                        source={li.volumeInfo.imageLinks.smallThumbnail}
                    />
          )}
        </div>
    )
}