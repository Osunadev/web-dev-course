import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    // This dispatch is going to woek as long as we use redux-thunk because it's
    // going to catch the fact that this is going to return a function
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, isPending, searchField, onSearchChange } = this.props;

    // Generating an array of filtered robots so that we can pass it down to CardList
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    // If the users are not loaded yet
    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
