import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as exampleAction from "../redux/actions/exampleAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.exampleAction(this.state.course); //Some one click the send button
  };

  //React: reflect and updates new changes if necesary 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1>Hello world, this is a Redux tutorial!</h1>
            <form onSubmit={this.handleSubmit}>
              <h2>Courses</h2>
              <h3>Add Course</h3>
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.course.title}
              />

              <input type="submit" value="Save" />
              {this.props.example.map(text => (
                <div key={text.title}>{text.title}</div>
              ))}
            </form>
          </div>
        </header>
      </div>
    );
  }
}

//React validate that we recieve our new data from the store 
App.propTypes = {
  example: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    example: state.text //text variable comes from redux combine reducers and becomes the new state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(exampleAction, dispatch) //Send my cmp state to redux
  };
};

//react-redux: connect() allow us to send data & recieve from the store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
