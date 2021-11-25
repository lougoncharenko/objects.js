// this keyword
const robot = {
    model: '1E78V2',
    energyLevel:100,
    provideInfo() {
      return  `I am ${this.model} and my current energy level is ${this.energyLevel}`
    }
  };
  
  console.log(robot.provideInfo());

//   Arrow Functions and this
const robot = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();

//   getters
// Getters are methods that get and return the internal properties of an object.
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number') {
        return 'My current energy level is ' + this._energyLevel
      } else {
        return "System malfunction: cannot retrieve energy level"
      }
    }
  };
  
  console.log(robot.energyLevel);


//   setters
/* Along with getter methods, we can also create setter methods
 which reassign values of existing properties within an object. */

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if (typeof num === 'number' && num >=0 ){
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0')
      }
    }
    };
    robot.numOfSensors = 100;
    console.log(robot.numOfSensors)

    // factory functions
    const monsterFactory = (name, age, energySource, catchPhrase) => {
        return { 
          name: name,
          age: age, 
          energySource: energySource,
          scare() {
            console.log(catchPhrase);
          } 
        }
      };
  
      const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

const robotFactory = (model, mobile) => {
    return{
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop')
      }
    }
  };
  
  const tinCan= robotFactory('P-500', true);
  tinCan.beep();

  /* Property Value Shorthand
ES6 introduced some new shortcuts for assigning 
properties to variables known as destructuring. */
const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};

const monsterFactory = (name, age) => {
    return { 
      name,
      age 
    }
  };


/*  Destructured Assignment
We often want to extract key-value pairs 
from objects and save them as variables. */

const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
      day: 'stay inside',
      night: 'satisfy appetite'
    }
  };

  const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'


// Built-in Object Methods

