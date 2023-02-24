import './App.css';
import CurrentWeather from './components/current-weather/CurrentWeather';
import Search from './components/search/search';

function App() {

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`)
    // console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChamge={handleOnSearchChange} />
      <CurrentWeather /> 
    </div>
  );
}

export default App;
