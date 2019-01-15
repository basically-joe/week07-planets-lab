const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('HyperlinkView:click-submitted', (event) => {
    const inputClick = event.detail;
    console.log('payload received in SolarSystem:', inputClick);
    const result = this.getPlanet(inputClick);
    PubSub.publish('SolarSystem:result-calculated', result);
  });
};

SolarSystem.prototype.getPlanet = function (event) {
  let temporaryVariable = ''
  this.planets.forEach((planet) => {
    debugger
    if (planet.name === event) {
      return temporaryVariable = planet;
    }
  })
  return temporaryVariable;
  console.log('payload received in SolarSystem:', temporaryVariable);
};



module.exports = SolarSystem;
