class Pokemon {
  _attack=["arañazo","gruñido"]
  _name
  _evolution

  constructor (name="Missingno", type="not defined",evolution=[]) {
      this._name = name
      this._type = type
      this._evolution = evolution
    }

  get Pokedex(){
    return {"name": this._name, "type": this._type, "evolution": this._evolution, "attacks":this._attack}
  }
  get attacks () {
    return this._attack
  }
  set attacks (newAttack) {
    if(this._attack.length < 4){
      this._attack.push(newAttack)
    }else{
      let random = Math.floor(Math.random()*4)
      this._attack[random] = newAttack
    }
  }
  sendAttack(index){
    return `${this._name} sends a ${this._attack[index]} to its adversary`
  }

  get Type () {
    return `${this._name} is a pokemon of type ${this._type}`
  }
  set Type (newType) {
    this._type = newType
  }

  get pokeName () {
    return `This pokemons is called ${this._name}`
  }
  set pokeName (name) {
    this._name = name
  }

  get Evolution (){
    if(this._evolution.length===0){
      return `${this._name} can´t evolve`

    }else {
      let msg =""
      for(let i = 0; i < this._evolution.length; i++){ 

      if(i===0){
        msg = `${this._name} can evolve into ${this._evolution[i]}`

      }else if(i === this._evolution.length-1){
        msg= msg + ` and ${this._evolution[i]}`

      }else{
          msg = msg + `, ${this._evolution}`
      }
    }
      return msg
    }
  }

  set Evolution (Evolution) {
    if(typeof Evolution==="string"){
      this._evolution.push(Evolution)
    }else if(Array.isArray(Evolution)===true){
      this._evolution = this._evolution.concat(Evolution)
    }
        
  }
}
  
const pokemonObj = new Pokemon()
console.log(pokemonObj.Pokedex)

pokemonObj.pokeName = "charmander"
pokemonObj.Type = "fire"
pokemonObj.Evolution = ["charmeleon","charizard"]
console.log(pokemonObj.Pokedex)

console.log(pokemonObj.attacks)
pokemonObj.attacks = "ascuaz"
pokemonObj.attacks = "Pantalla de humo"
console.log(pokemonObj.attacks)
console.log(pokemonObj.sendAttack(2))

console.log(pokemonObj.Evolution)