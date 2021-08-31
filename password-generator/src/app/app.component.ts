import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  //handel on change use letters
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  //handel on change use numbers
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  //handel on change use symbols
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    this.password = 'MY PASSWORD!!';
  }
}
