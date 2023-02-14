import { Component } from '@angular/core';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.sass']
})
export class QuestionBoxComponent {
  gameResult!:string;
  programChoosed!:string;

  gameValues = ['piedra','papel','tijera'];

  evaluateType(inputResponse:Event){
    const randomNumber = Math.floor(Math.random() * 3)
    this.programChoosed = this.gameValues[randomNumber]
 
    const inputType = (<HTMLInputElement>inputResponse.target).value.toLocaleLowerCase();


    if(inputType === 'piedra' && this.programChoosed === 'papel'){
      this.gameResult = 'perdio'
    }
    else if(inputType === 'piedra' && this.programChoosed === 'piedra'){
      this.gameResult = 'empato'
    }
    else if(inputType === 'papel' && this.programChoosed === 'papel'){
      this.gameResult = 'empato'
    }
    else if(inputType === 'papel' && this.programChoosed === 'tijera'){
      this.gameResult = 'perdio'
    }
    else if(inputType === 'tijera' && this.programChoosed === 'piedra'){
      this.gameResult = 'perdio'
    }
    else if(inputType === 'tijera' && this.programChoosed === 'tijera'){
      this.gameResult = 'empato'
    }
    else{
      this.gameResult = 'gano'
    }
    (<HTMLInputElement>inputResponse.target).value=''
  }
}
