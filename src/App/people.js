import React from 'react';
import DataComponent from '../HOC/dataComponent';

const PeopleList = (props) => {
    let {data:{results}} = props;
    return (
        <ol className="poeple-list">
            { typeof results === 'object' && Array(...results).map((v, i) => 
                <li key={i}>
                    {v.gender}:{v.name.first} {v.name.last}
                </li>    
            )}    
        </ol>
    );
} 

const People = DataComponent(PeopleList, "https://randomuser.me/api/");
export default People;