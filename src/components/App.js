import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { exampleAction } from "../redux/actions/exampleAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class App extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1>Hello world, this is a Redux tutorial!</h1>

            <p>Here is our property: {this.props.examplePropOne}</p>
          </div>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  examplePropOne: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  debugger;
  return {
    examplePropOne: state.examplePropOne
  };
};

const mapDispatchToProps = dispatch => {
  debugger;
  return {
    actions: bindActionCreators({ exampleAction }, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
