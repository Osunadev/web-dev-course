import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import Particles from 'react-particles-js';
import './App.css';
// We get to know what are the best options by playing around a little bit
const particleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
};

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  // This is our initial route
  route: 'SignIn',
  isSignedIn: false,
  // Ideally when we register, we can update this properties
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    fetch('http://localhost:8080/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        // If the Clarifai API gives to us a valid response (everything went right)
        if (response) {
          fetch('http://localhost:8080/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(resp => resp.json())
            .then(count => {
              // We only want to update the entries property
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(error => console.log(error));
  };

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = square => {
    this.setState({ box: square });
  };

  onRouteChange = routeName => {
    if (routeName === 'SignOut') {
      this.setState(initialState);
    } else if (routeName === 'Home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: routeName });
  };

  render() {
    const { isSignedIn, box, imageUrl, route, user } = this.state;

    return (
      <div className='App'>
        <Particles params={particleOptions} className='particles' />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {route === 'Home' ? (
          <div>
            <Logo />
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm inputChange={this.onInputChange} buttonSubmit={this.onPictureSubmit} />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === 'SignIn' ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        )}
      </div>
    );
  }
}

export default App;
