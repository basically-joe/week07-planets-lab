const PubSub = require('../src/helpers/pub_sub.js');

PlanetInfoView.prototype.bindEvents = function() {
 PubSub.subscribe('SolarSystem:result-calculated', (event) => {
   const returnedPlanet = event.detail;
   console.log('payload received in PlanetInfoView:', returnedPlanet);
   this.displayResult(returnedPlanet);
 })
};

PlanetInfoView.prototype.displayResult = function (result) { // NEW
 const resultElement = document.querySelector('.planet-details');
 resultElement.textContent = result.detail;
};

module.export = PlanetInfoView;
