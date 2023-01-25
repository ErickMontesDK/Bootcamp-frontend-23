function checkPowerPoint(ppAvailable: number){
    console.log(ppAvailable)
    return function (target: Object, propertyKey: string, descriptor: any):void {    
        descriptor.value = function(...args: any[]){
            if(args[0].power < ppAvailable){
                console.log('Can execute attack')
            } else {
                console.log("Can't execute attack")
            }
        }
    }
    
}


class Pokemon {
  name: string;
  ppAvailable = 1;
  constructor(name: string, ppAvailable: number) {
    this.name = name;
    this.ppAvailable = ppAvailable;
  }
  
  @checkPowerPoint(5)
  figth(move: any) {
    console.log(`${this.name} used ${move?.name}!`);
    this.ppAvailable -= 1;
  }
}
  
const move = {name: 'thunderbolt', power: 90};
const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(move);
// pikachu.figth(move);
  