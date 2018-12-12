import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidationProvider {

  constructor(
    public http: HttpClient
  ) {}

  equalTo(field_name) {
    return (control): { [key: string]: any } => {
      let input = control.value;
      let isValid = control.root.value[field_name] == input;
      if (!isValid)
        return {'equalTo': {isValid}};
      else
        return null;
    };
  }

  emailValid() {
    return (control): { [key: string]: any } => {
      let emailPattern = /(\w(=?@)\w+\.{1}[a-zA-Z]{2,})/i;
      if (!emailPattern.test(control.value)) {
        return {InvalidEmail: true};
      } else {
        return null;
      }
    };
  }

}
