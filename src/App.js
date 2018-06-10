import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getResponse } from './actions/getHtmlByTag';

let data = {endpoint : {}, tag : {}};
class App extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getTags(data.endpoint.value, data.tag.value);
    }
    render() {
    const {tag} = this.props;
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
              <label>
              Endpoint:<br/>
              <input ref={endpoint => data.endpoint = endpoint} value="https://cobalt.io"/>

              </label>
              <br/>
              Tag:<br/>
              <input ref={tag => data.tag = tag} value="h1"/>
              <br/><br/>
              <input type="submit" value="Submit" />
          </form>
          {tag != null && <p>{tag}</p>}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {tag : state.tag};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTags : (endpoint, tag) => dispatch(getResponse(endpoint, tag))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
