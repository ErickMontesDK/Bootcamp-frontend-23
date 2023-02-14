import { Component } from '@angular/core';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.sass']
})
export class QuestionBoxComponent {
  gameResult!:string;
  programChoosed!:string;

  gameValues = ['piedra','papel','tijeras'];

  evaluateType(inputResponse:Event){
    const randomNumber = Math.floor(Math.random() * 3)
    this.programChoosed = this.gameValues[randomNumber]
    
    const inputType = (<HTMLInputElement>inputResponse.target).value.toLocaleLowerCase();
    (<HTMLInputElement>inputResponse.target).value=''

    switch (inputType) {
      case 'piedra':
        this.gameResult = this.programChoosed === 'papel' ? 'perdio' : (inputType === this.programChoosed ? 'empato' : 'gano');
        break;
      case 'papel':
        this.gameResult = this.programChoosed === 'tijeras' ? 'perdio' : (inputType === this.programChoosed ? 'empato' : 'gano');
        break;
      case 'tijeras':
        this.gameResult = this.programChoosed === 'piedra' ? 'perdio' : (inputType === this.programChoosed ? 'empato' : 'gano');
        break;
    }
  }
}
