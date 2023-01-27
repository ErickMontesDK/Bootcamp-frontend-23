function checkPowerPoint(target: Object, propertyKey: string, descriptor: PropertyDescriptor):void {   
  const classFunction = descriptor.value
  
  descriptor.value = function(...args: any){
      if(this.ppAvailable <= 0 ){
          console.log(`Can't execute attack! ${this.name} doesn't have enough PP for ${args.name}!`)
          return
      }
    classFunction.apply(this, args)
  }
}

export class Pokemon {
  name: string;
  ppAvailable = 1;
  id: number;
  types: string[];
  constructor(name: string, ppAvailable: number, id:number, types: string[]) {
    this.name = name;
    this.ppAvailable = ppAvailable;
    this.id = id;
    this.types = types;
  }
  
  @checkPowerPoint
  figth(move: any) {
    console.log(`${this.name} used ${move?.name}!`);
    this.ppAvailable -= 1;
  }
}

export type PokemonType = {
  id:number;
  name:string;
  ppAvailable:number;
  types:string[];
}