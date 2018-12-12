import { Input, Component } from '@angular/core';

@Component({
  selector: 'image-preview',
  templateUrl: 'image-preview.html'
})
export class ImagePreviewComponent {
  @Input() image: string;

  constructor() {}
}
