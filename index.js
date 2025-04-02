const heroes = [ 
    { name: "Spider-Man", power: 85, universe: "Marvel", isActive: true, isAlien: false }, 

    { name: "Batman", power: 80, universe: "DC", isActive: false, isAlien: false }, 
    
    { name: "Wonder Woman", power: 90, universe: "DC", isActive: true, isAlien: true }, 
    
    { name: "Iron Man", power: 88, universe: "Marvel", isActive: true, isAlien: false }, 
    
    { name: "Captain Marvel", power: 95, universe: "Marvel", isActive: false, isAlien: true }, 
    
    { name: "Flash", power: 78, universe: "DC", isActive: true, isAlien: false }, 
    
    { name: "Thor", power: 92, universe: "Marvel", isActive: true, isAlien: true }, 
    
    { name: "Green Lantern", power: 83, universe: "DC", isActive: true, isAlien: true }, 
    
    { name: "Black Panther", power: 87, universe: "Marvel", isActive: false, isAlien: false }, 
    
    { name: "Martian Manhunter", power: 91, universe: "DC", isActive: true, isAlien: true } ];

//Challenge 1 ntm
const activeHeroes = heroes.filter(hero => hero.isActive);
console.log("Challenege 1", activeHeroes);

//Challenge 2
const marvelHeroes = heroes.filter(hero => hero.universe === "Marvel");
console.log("Challenge 2", marvelHeroes);

//Challenge 3
const alienHeroes = heroes.filter(hero => hero.isAlien)
console.log("Challenge 3", alienHeroes);

//Challenge 4
const powerfulHeroes = heroes.filter(hero => hero.power >= 90)
console.log("Challenge 4", powerfulHeroes);

//Challenge 5
const activeHumans = heroes.filter(hero => hero.isAlien === false && hero.isActive)
console.log("Challenge 5", activeHumans);

//Challenge 6
const activePowerfulDC = heroes.filter(hero => hero.isActive && hero.universe === "DC" && hero.power >= 85)
console.log("Challenge 6", activePowerfulDC);

//Challenge 7
const inactiveHumans = heroes.filter(hero => hero.isActive === false && hero.isAlien === false)
console.log("Challenge 7", inactiveHumans);

//Challenge 8
const man = "man"
const Man = "Man"
const findMan = heroes.filter(hero => hero.name.includes(man) || hero.name.includes(Man))
console.log("Challenge 8", findMan);

//Challenge 9
const isOdd = number => number % 2 !== 0;

const impairPower = heroes.filter(hero => isOdd(hero.power))

console.log("Challenge 9", impairPower);

//Challenge 10
const longNames = heroes.filter(hero => hero.name.length > 10)
console.log("Challenge 10", longNames);


