import React from 'react';

const TextList = ({id, onChange, value, rows, cols}) => {
    return ( 
        <textarea 
        id={id}
        name={id}
        value={value}
        rows={rows}
        cols={cols}
        onChange={e => onChange(e.target.value)}
        />
     );
}
 
export default TextList;