import React from 'react';
import PropTypes from 'prop-types';

const CountryList = ({ countries = [], loading = false }) => { 
    return ( !loading && countries.length ) ? <div><ul>{countries.map((v, i) => <li key={i}> {v} </li>)}</ul></div> : <div>Countries loading...</div> ;
}

CountryList.propTypes = {
    countries: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default CountryList;