import "./CurrentWeather.css"

const CurrentWeather = () => {
    return ( 
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Abuja</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png"/>
            </div>
            <div className="bottom">
                <p className="temperature">23°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramter-label">Feels like</span>
                        <span className="paramter-label">22°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramter-label">Wind</span>
                        <span className="paramter-label">2 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramter-label">Humidity</span>
                        <span className="paramter-label">15%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramter-label">Pressure</span>
                        <span className="paramter-label">15 hPa</span>
                    </div>
                
                </div>
            </div>
        </div>
    );
} 
 
export default CurrentWeather;