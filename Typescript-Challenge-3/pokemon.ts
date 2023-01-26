function checkPowerPoint(target: Object, propertyKey: string, descriptor: PropertyDescriptor):void {   
  const classFunction = descriptor.value
  
  descriptor.value = function(...args: any){
      if(this.ppAvailable <= 0 ){
          console.log(`Can't execute attack! ${this.name} doesn't have enough PP for ${move.name}!`)
          return
      }
    classFunction.apply(this, args)
  }
}

class Pokemon {
  name: string;
  ppAvailable = 1;
  constructor(name: string, ppAvailable: number) {
    this.name = name;
    this.ppAvailable = ppAvailable;
  }
  
  @checkPowerPoint
  figth(move: any) {
    console.log(`${this.name} used ${move?.name}!`);
    this.ppAvailable -= 1;
  }
}



function getpokemonsId(target: Function){
  target.prototype.pokemonsAssigned = [1,3]
}

@getpokemonsId
class TrainerPokemon {
  name: string;

  constructor(name: string){
    this.name = name
  }
}
  
const move = {name: 'thunderbolt', power: 90};
const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(move);
pikachu.figth(move);
  

const Player1 = new TrainerPokemon('Mario') as any
console.log(Player1.pokemonsAssigned)


// function BaseEntity(ctr: Function) {
//   ctr.prototype.id = Math.random();
//   ctr.prototype.created = new Date().toLocaleString("es-ES");
// }

// @BaseEntity
// class User {
//   constructor(public name: string) {}
// }

// @BaseEntity
// class City {
//   constructor(public zicode: number) {}
// }

// let user = new User("dany") as any;
// let ny = new City(8930) as any;
// //City and User classes has the id and created property ;)
// console.log(ny.id);
// console.log(user.id);