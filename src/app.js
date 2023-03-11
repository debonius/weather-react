'use strict';

function App() {
  return (
    <main>
      <Search />
      <Today />
      <City />
      <Temperature />
      <Panel />
    </main>
  );
}

function Search() {
  return (
    <form id="form" action="">
        <input id="input-city" list="results" type="text" placeholder="search City" aria-label="form"/>
        <input id="btn" type="submit" hidden/>
    </form>
  );
}

function Today() {
  return (
    <div class="current-date">
      <span id="time" class="time"></span>
      <span id="date" class="date"></span>
    </div>
  );
}

function City() {
  return (
    <div class="city">
      <div class="icon">
        <img class="weather-icon" id="weather-icon" src="" alt="weather icon"/>
        <span id="description" class="desc">no data</span>
      </div>
      <h1 class="location">Service unavailable</h1>
    </div>    
  );
}

function Temperature() {
  return (
    <div class="temp">
      <span class="max">no data</span>
      <span class="c">no data</span>
      <span id="feel" class="feel">no data</span>
      <span class="min">no data</span>
    </div>
  );
}

function Humidity() {
  return (
    <div class="info-box">
      <img class="info-box__icon" src="./images/hum.png" alt="humidity" />
      <span class="info-box__label">humidity</span>
      <span class="humidity"></span>
    </div>
  );
}
function Wind() {
  return (
    <div class="info-box">
      <img class="info-box__icon" src="./images/wind.png" alt="wind" />
      <span class="info-box__label">wind</span>
      <span class="wind"></span>
    </div>
  );
}
function Pressure() {
  return (
    <div class="info-box">
      <img class="info-box__icon" src="./images/pres.png" alt="pressure" />
      <span class="info-box__label">pressure</span>
      <span class="pressure"></span>
    </div>
  );
}
function Sunrise() {
  return (
    <div class="day info-box">
      <img class="info-box__icon sun-icon" src="./images/sun.png" alt="sunrise and sunset" />
      <span class="sunrise">no data</span>
      <span class="sunset">no data</span>
    </div>
  );
}

function Panel() {
  return (
    <article>
      <Humidity />
      <Wind />
      <Pressure />
      <Sunrise />
    </article>
  );
}

const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);