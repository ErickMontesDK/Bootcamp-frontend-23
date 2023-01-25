function checkPowerPoint(target: Object, propertyKey: string, descriptor: any):void {   
    descriptor.value = function(...args: any[]){

        if(args[0].power < this.ppAvailable){
            console.log(`${this.name} executed ${move.name}`)
            this.ppAvailable -= move.power;
        } else {
            console.log(`Can't execute attack! ${this.name} doesn't have enough power for ${move.name}!`)
        }
    }
    return descriptor
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
    this.ppAvailable -= move.power;
    console.log(this.ppAvailable)
  }
}
  
const move = {name: 'thunderbolt', power: 90};
const pikachu = new Pokemon('pikachu', 100);
pikachu.figth(move);
pikachu.figth(move);
  