import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {WebcamImage, WebcamModule} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, WebcamModule],
  template: `
    <h3>Camera</h3>
    <webcam
      [allowCameraSwitch]="true"
      [trigger]="triggerObservable"
      (imageCapture)="onImageCapture($event)"
    ></webcam>
    <button (click)="onTakeImage()">Take an image</button>
    <div *ngIf="image">
      <h4>Image:</h4>
      <img [src]="image.imageAsDataUrl"/>
    </div>
  `,
})
export class CameraComponent {
  image?: WebcamImage;
  private trigger = new Subject();

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable() as Observable<void>;
  }

  onTakeImage() {
    this.trigger.next(null);
  }

  onImageCapture(image: WebcamImage) {
    this.image = image;
  }
}
