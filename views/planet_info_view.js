const PubSub = require('../src/helpers/pub_sub.js');

const PlanetInfoView = function(container) {
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('SolarSystem:result-calculated', (event) => {
    const planetObject = event.detail;
    // console.log('payload received in PlanetInfoView:', returnedPlanet);
    this.render(planetObject);
  })
};

PlanetInfoView.prototype.render = function(planet) {
  // debugger
  this.container.innerHTML = '';

  const heading = this.createHeading(planet);
  const infoList = this.createInfoList(planet);
  const img = this.createImage(planet);

  this.container.appendChild(heading);
  this.container.appendChild(infoList);
  this.container.appendChild(img);
};

PlanetInfoView.prototype.createHeading = function(planet) {
  const heading = document.createElement('h2');
  heading.textContent = planet.name;
  return heading;
};

PlanetInfoView.prototype.createImage = function(planet) {
  const img = document.createElement('img');
  img.classList.add('medium-image');
  img.src = planet.image;
  return img;
};

PlanetInfoView.prototype.createInfoList = function(planet) {
  const infoList = document.createElement('ul');

  const liDay = this.createLi(`Day: ${planet.day} Earth days`, infoList);
  const liOrbit = this.createLi(`Orbit: ${planet.orbit} Earth days`, infoList);
  const liSurfaceArea = this.createLi(
    `Surface Area: ${planet.surfaceArea} Earths`,
    infoList
  );
  const liVolume = this.createLi(`Volume: ${planet.volume} Earths`, infoList);
  const liGravity = this.createLi(`Gravity: ${planet.gravity}g`, infoList);
  const liMoons = this.createLi(`Moons: ${planet.moons}`, infoList);

  return infoList;
};

PlanetInfoView.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
};

// PlanetInfoView.prototype.displayResult = function (result) { // NEW
//   const resultElement = document.querySelector('.planet-details');
//   debugger;
//   // const resultElement = document.createElement('p');
//   for (i in result) {
//     resultElement.textContent = i + ": " + result[i];
//   }
//   resultElement.appendChild(result);
// };

module.exports = PlanetInfoView;
