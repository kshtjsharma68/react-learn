import React, {Component} from 'react';
import PropTypes from 'prop-types';

const DataComponent = (ComposedComponent, url ) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                loading: false,
                loaded: false,
                data: []
            }
        }

        // static propTypes = {
        //     url: PropTypes.string.isRequired
        // }

        // static getDefaultProps = {
        //     url: ''
        // }

        static getDefaultStateFromProps(nextProps) {
            console.log('hoc next props', nextProps)
        }

        componentDidMount() {
            this.setState({loading: true});
            fetch(url)
                .then(r => r.json())
                .then(json => {
                    console.log('result',json)
                    this.setState({
                        loading: false, 
                        loaded: true,
                        data:  json
                    })
                })
                .catch(err => err.json())
                .catch(e => console.log('Something went wrong with url fetch data:',e))
        }

        render() {
            let { loading } = this.state;console.log(this.state)
            return (
                <div className="data-component">
                    {
                        loading 
                        ? 
                        <div>loading list data....</div>
                        :
                        <ComposedComponent {...this.state} {...this.props}/>
                    }
                </div>
            )
        }
    }
}

export default DataComponent;