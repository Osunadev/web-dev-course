import React from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';

const urlFetchPages = [9, 7, 1, 4, 4, 4];
const baseUrl = 'https://swapi.co/api/';
const urlNames = [
  'people',
  'planets',
  'films',
  'species',
  'vehicles',
  'starships'
];
const arrayCaptionValues = [
  ['Name', 'Mass', 'Height', 'Birth Year', 'Gender'],
  ['Name', 'Gravity', 'Population', 'Diameter', 'Terrain'],
  ['Title', 'Episode', 'Director', 'Producer(s)', 'Release Date'],
  ['Name', 'Classification', 'Avg. Height', 'Language', 'Avg. Lifespan'],
  ['Name', 'Model', 'Passenger', 'Length', 'Max Speed'],
  ['Name', 'Model', 'Passenger', 'Length', 'Starship Class']
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [],
      planets: [],
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      // This variable will be responsible of what options renders in the screen(people, planets, ...)
      optSelectedIdx: 0,
      searchInput: ''
    };
  }

  componentDidMount() {
    // Updating the state after we fetch our data
    this.updateStatePeople();
    this.updateStatePlanets();
    this.updateStateFilms();
    this.updateStateSpecies();
    this.updateStateVehicles();
    this.updateStateStarships();
  }

  getActualOptionArray(optionIdx) {
    switch (optionIdx) {
      default:
      case 0:
        return this.state.people;
      case 1:
        return this.state.planets;
      case 2:
        return this.state.films;
      case 3:
        return this.state.species;
      case 4:
        return this.state.vehicles;
      case 5:
        return this.state.starships;
    }
  }

  updateStatePeople() {
    this.fetchInformation(0).then(arrayValues => {
      // Finally we'll have all of our people and then we can save them into the state
      this.setState({ people: arrayValues });
    });
  }

  updateStatePlanets() {
    this.fetchInformation(1).then(arrayValues => {
      this.setState({ planets: arrayValues });
    });
  }

  updateStateFilms() {
    this.fetchInformation(2).then(arrayValues => {
      this.setState({ films: arrayValues });
    });
  }

  updateStateSpecies() {
    this.fetchInformation(3).then(arrayValues => {
      this.setState({ species: arrayValues });
    });
  }

  updateStateVehicles() {
    this.fetchInformation(4).then(arrayValues => {
      this.setState({ vehicles: arrayValues });
    });
  }

  updateStateStarships() {
    this.fetchInformation(5).then(arrayValues => {
      this.setState({ starships: arrayValues });
    });
  }

  fetchInformation(nameIndex) {
    const arrayResponses = this.createArrayOfResponses(nameIndex);

    return Promise.all(arrayResponses).then(arrayUsers => {
      return arrayUsers.reduce((acc, rawArrayInfo) => {
        // Joining the arrays
        const arrayValues = this.createSpecialObject(
          urlNames[nameIndex],
          rawArrayInfo
        );

        return [...acc, ...arrayValues];
      }, []);
    });
  }

  // It will return an object with the keys adequate to each option (People, Planets, Films, ...)
  createSpecialObject(option, rawArray) {
    let newObj;

    switch (option) {
      default:
      case 'people':
        newObj = rawArray.results.map(info => ({
          name: info.name,
          gender: info.gender,
          mass: info.mass,
          height: info.height,
          birthYear: info.birth_year
        }));
        break;
      case 'planets':
        newObj = rawArray.results.map(info => ({
          name: info.name,
          gravity: info.gravity,
          population: info.population,
          diameter: info.diameter,
          terrain: info.terrain
        }));
        break;
      case 'films':
        newObj = rawArray.results.map(info => ({
          title: info.title,
          episode: info.episode_id,
          director: info.director,
          producer: info.producer,
          releaseDate: info.release_date
        }));
        break;
      case 'species':
        newObj = rawArray.results.map(info => ({
          name: info.name,
          class: info.classification,
          avgHeight: info.average_height,
          language: info.language,
          avgLifespan: info.average_lifespan
        }));
        break;
      case 'vehicles':
        newObj = rawArray.results.map(info => ({
          name: info.name,
          model: info.model,
          passengers: info.passengers,
          length: info.length,
          maxSpeed: info.max_atmosphering_speed
        }));
        break;
      case 'starships':
        newObj = rawArray.results.map(info => ({
          name: info.name,
          model: info.model,
          passengers: info.passengers,
          length: info.length,
          class: info.starship_class
        }));
        break;
    }

    return newObj;
  }

  createArrayOfResponses(nameIndex) {
    // Starting with an empty array to store the Promises
    const arrayResponses = [];

    // Looping and making fetches to get all the people
    for (let i = 1; i <= urlFetchPages[nameIndex]; i++) {
      arrayResponses.push(
        fetch(baseUrl + urlNames[nameIndex] + '/?page=' + i).then(resp =>
          resp.json()
        )
      );
    }

    return arrayResponses;
  }

  // Event Listeners
  onSearchChange = event => {
    this.setState({ searchInput: event.target.value.toLowerCase() });
  };

  optionMenuSelect = event => {
    const li = event.target;
    const opt = li.innerHTML.toLowerCase();

    // Only toggle the class if it's a different selection
    if (this.state.optSelectedIdx !== urlNames.indexOf(opt)) {
      // Removing all the selections
      urlNames.forEach((opt, i) => {
        li.parentElement.childNodes[i].classList.remove('selection');
      });
      // Toggle one only selection
      li.classList.toggle('selection');
    }

    this.setState({
      optSelectedIdx: urlNames.indexOf(opt)
    });
  };

  render() {
    const { optSelectedIdx, searchInput } = this.state;

    let actualDisplayedArray;
    // Because films is the only option that doesn't have a name property
    if (optSelectedIdx === 2) {
      actualDisplayedArray = this.getActualOptionArray(optSelectedIdx).filter(
        film => film.title.toLowerCase().includes(searchInput)
      );
    } else {
      // The other options have a name property
      actualDisplayedArray = this.getActualOptionArray(optSelectedIdx).filter(
        opt => opt.name.toLowerCase().includes(searchInput)
      );
    }

    if (!this.state.people.length) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <Header optSelection={this.optionMenuSelect} />
          <SearchBox
            option={urlNames[optSelectedIdx]}
            searchChange={this.onSearchChange}
          />
          <Scroll>
            <CardList
              arrayObjValues={actualDisplayedArray}
              arrayValueCaption={arrayCaptionValues[optSelectedIdx]}
            />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
