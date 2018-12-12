import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IUser {
  avatar?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  country?: string;
  city?: string;
  language?: string;
  phone?: string;
  zipCode?: string;
}

@Injectable()
export class ProfileProvider {
  user: IUser;

  constructor(
    public http: HttpClient
  ) {
    this.resetProfile();
  }

  resetProfile() {
    this.user = {};
    this.user.avatar = '../assets/imgs/avatar-default.png';
    this.user.firstName = 'Dima';
    this.user.lastName = 'Gulyaev';
    this.user.email = 'dimasss4889@gmail.com';
    this.user.country = 'Ukraine';
    this.user.city = 'Kharkiv';
    this.user.phone = '+380958155557';
    this.user.language = 'English';
    this.user.zipCode = '61000';
  }
}
