const maximumFitness = 10;
const initialAge = 0;
const initialHunger = 0;
function Pet(name) {
    this.name = name;
    this.age = initialAge;
    this.hunger = initialHunger;
    this.fitness = maximumFitness;
}
Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}
Pet.prototype.walk = function() {
    if((this.fitness + 4) <= 10) {
        return this.fitness += 4;
    } else {
        return this.fitness = 10;
    };
}
Pet.prototype.feed = function() {
    if((this.hunger - 3) >= 0) {
        return this.hunger -= 3;
    } else {
        return this.hunger = 0;
    };
};

module.exports = Pet;