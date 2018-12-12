import { NgModule } from '@angular/core';
import { LoginEmailComponent } from './login-email/login-email';
import { ImagePreviewComponent } from './image-preview/image-preview';

@NgModule({
	declarations: [
    LoginEmailComponent,
    ImagePreviewComponent
  ],
	imports: [],
	exports: [
    LoginEmailComponent,
    ImagePreviewComponent
  ]
})
export class ComponentsModule {}
