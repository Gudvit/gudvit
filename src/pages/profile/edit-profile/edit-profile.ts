import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, normalizeURL, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
// injections
import { ValidationProvider } from "../../../providers/validation/validation";
import { ActionsProvider } from "../../../providers/actions/actions";
import { ProfileProvider } from "../../../providers/profile/profile";

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  form: FormGroup;
  avatar: string = '../assets/imgs/avatar-default.png';
  avatarChanged = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private actionSheet: ActionSheetController,
    private formBuilder: FormBuilder,
    private actionService: ActionsProvider,
    public validateService: ValidationProvider,
    public profileService: ProfileProvider
  ) {
    this.initForm();
    this.avatar = this.profileService.user.avatar;
  }

  initForm() {
    return this.form = this.formBuilder.group({
      firstName: [this.checkValue(this.profileService.user.firstName), Validators.required],
      lastName: [this.checkValue(this.profileService.user.lastName), Validators.required],
      email: [this.checkValue(this.profileService.user.email),  Validators.compose([Validators.required, this.validateService.emailValid()])],
      country: [this.checkValue(this.profileService.user.country), Validators.required],
      city: [this.checkValue(this.profileService.user.city), Validators.required],
      phone: [this.checkValue(this.profileService.user.phone), Validators.required],
      language: [this.checkValue(this.profileService.user.language), Validators.required],
      zipCode: [this.checkValue(this.profileService.user.zipCode), Validators.required],
    });
  }

  isInvalidField(field: string): boolean {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  checkValue(value) {
    let correctValue = '';
    if (typeof value !== 'undefined' && value !== null && value.length) {
      correctValue = value;
    }

    return correctValue;
  }

  popupAvatarSource() {
    let actionSheet = this.actionSheet.create({
      buttons: [
        {
          text: 'Load from gallery',
          handler: () => {this.addAvatar(this.camera.PictureSourceType.PHOTOLIBRARY);}
        },
        {
          text: 'Take a photo',
          handler: () => {this.addAvatar(this.camera.PictureSourceType.CAMERA);}
        },
        this.deleteButton(),
        {
          text: 'Cancel',
          role: 'cancel'
        }]
    });
    actionSheet.present();
  }

  addAvatar(source): Promise<any> {
    const options: CameraOptions = {
      sourceType: source,
      quality: 100,
      destinationType: 0,
      encodingType: 0,
      targetWidth: 700,
      targetHeight: 700,
      correctOrientation: true,
      cameraDirection: 1,
      mediaType: 0
    };
    return this.camera.getPicture(options)
      .then(
        path => {
          this.avatarChanged = true;
          this.profileService.user.avatar = 'data:image/jpeg;base64,' + normalizeURL(path);
        },
        err => console.error('ERROR:', err)
      )
      .catch(err => console.log('ERROR: ', err))
  }

  deleteButton() {
    if (this.avatar) {
      return {
        text: 'Delete photo',
        handler: () => {this.deleteAvatar()}
      }
    }
  }

  deleteAvatar() {
    if (this.avatar) {
      this.avatar = '../assets/imgs/avatar-default.png';
    }
  }

  changeProfile() {
    if(this.form.valid) {
      this.profileService.user.firstName = this.form.value.firstName;
      this.profileService.user.lastName = this.form.value.lastName;
      this.profileService.user.email = this.form.value.email;
      this.profileService.user.country = this.form.value.country;
      this.profileService.user.city = this.form.value.city;
      this.profileService.user.phone = this.form.value.phone;
      this.profileService.user.language = this.form.value.language;
      this.profileService.user.zipCode = this.form.value.zipCode;
      this.actionService.showLoader(500);
      this.navCtrl.setRoot('ProfilePage',{}, {animate: true, direction: 'forward', duration: 500});
    } else {
      this.validateAllFormFields(this.form);
    }
  }
}
