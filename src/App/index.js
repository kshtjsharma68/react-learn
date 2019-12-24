import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CountryList from './country';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            countries: []
        }
    }

    static getDerivedStateFromProps(nextProps) {
        return null;
    }

    componentDidMount = _ => {
        this.setState({ loading: true });
        fetch("https://restcountries.eu/rest/v1/all")
            .then(res => res.json())
            .then(json => json.map( country => country.name ))
            .then(names => { 
                this.setState({ loading: false, countries: names })
            })
            .catch((err) => console.error(err));
    }

    render() {
        let { countries, loading } = this.state;console.log('state',this.state)
        return (
            <div>
                <CountryList countries={countries} loading={loading} />
            </div>
        )
    }
}

App.propTypes = {

}

App.defaultProps = {

}

export default App;