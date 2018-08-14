import React from 'react';

const SearchEntryView = (props) => {

console.log(props);
   return(
    <div>
        <div className='grid-item'>
        {props.movie.title}
        </div>
    </div>
   );
}

export default SearchEntryView;