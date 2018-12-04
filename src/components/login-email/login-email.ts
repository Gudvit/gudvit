import { Component } from '@angular/core';

@Component({
  selector: 'login-email',
  templateUrl: 'login-email.html'
})
export class LoginEmailComponent {
  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
