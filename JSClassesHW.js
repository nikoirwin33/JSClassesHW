// class Cat {
//   constructor(name, age, coatColor,) {
//       this.name = name
//       this.age = age
//       this.coatColor = coatColor
//   }
// // //       purr() {
// //       console.log("purr purr meow!");
// //      }
// //      eat() {
// //      console.log("Lick");
// //      }  
// //      greet() {
// //       console.log("Meow")
// //      }    
// //  }
 
//   const lilCat = new Cat ("BankRoll", 3, "tri-color")
       
  //  console.log(lilCat)
  //  lilCat.purr()
  //  lilCat.eat()
  //  lilCat.greet()
  //  console.log(lilCat.coatColor)

//  const lilCat2 = new Cat ("Killa", 7, "Black")
       
  //  console.log(lilCat2)
  //  lilCat2.purr()
  //  lilCat2.eat()
  //  lilCat2.greet()
  //  console.log(lilCat2.coatColor)


class Pirate { 
  constructor(name, belongings , value , position) {
      this.name = name
      this.belongings = belongings
      this.value = value
      this.position = position
  }
  robsCargo() {
      console.log("Give me it all arghhh!")
   }
    eat() {
          console.log("Yum Yum")
   } 
    sleep() {
          console.log("zzz")
  }  
}

const Niko = new Pirate("Niko", "gold", "loot", "Captain") 
const Nate = new Pirate("Nate", "telescope", "violent", "Driver") 
const Chris = new Pirate("Chris", "compass", "parrot", "Follower") 
const JollyRanger = [Niko, Nate, Chris]

const Danny = new Pirate("Danny", "rum", "jewelry", "blackSmith") 
const Cam = new Pirate("Cam", "abandon ship", "greed", "enforcer") 
const Kratos = new Pirate("Kratos", "eye-patch", "thief", "Seafarer") 
const Titanic = [Danny, Cam, Kratos]

console.log(Titanic)
console.log(JollyRanger)

JollyRanger.forEach(Pirate => {
  console.log(Pirate.name)
  console.log(Pirate.belongings)
  console.log(Pirate.value)
  console.log(Pirate.position)
});

Titanic.forEach(Pirate => {
  console.log(Pirate.name)
  console.log(Pirate.belongings)
  console.log(Pirate.value)
  console.log(Pirate.position)
});