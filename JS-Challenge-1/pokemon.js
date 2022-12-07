class Pokemon {
    _attack="Tortazo"
    _name= "missingno"
    _evolution = []

    constructor (name, type,evolution) {
      this._name = name
      this._type = type
      this._evolution = evolution
    }

    get Pokedex(){
        return {"name": this._name, "type": this._type, "evolution": this._evolution, "attack":this._attack}
    }
    get attack () {
      return this._attack
    }
    set attack (name) {
        this._name = "ascuaz"
    }
  
    get Type () {
      return this.type
    }
    set Type (newType) {
        this._type = newType
    }

    get pokeName () {

    }
    set pokeName (name) {
        this._name = name
    }
    set Evolution (Evolution) {
        this._evolution = Evolution
    }
  }
  
  const pokemonObj = new Pokemon()
 console.log(pokemonObj.Pokedex)

  pokemonObj.pokeName = "charmander"
  pokemonObj.Type = "fire"
  pokemonObj.Evolution = ["charmeleon","charizard"]

  console.log(pokemonObj.Pokedex)