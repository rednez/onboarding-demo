import {
  AngularSignaturePadModule,
  NgSignaturePadOptions,
  SignaturePadComponent
} from '@almothafar/angular-signature-pad';
import {CommonModule} from '@angular/common';
import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, AngularSignaturePadModule],
  template: `
    <signature-pad #signature [options]="signaturePadOptions"
                   (drawStart)="drawStart($event)"
                   (drawEnd)="drawComplete($event)"></signature-pad>
  `,
  styles: [`:host {
    display: block;
    margin-top: 20px;
  }
  signature-pad {
    background-color: white;
  }
  `]
})
export class SignPadComponent implements AfterViewInit {
  @ViewChild('signature') signaturePad?: SignaturePadComponent;

  signaturePadOptions: NgSignaturePadOptions = {
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300
  };

  ngAfterViewInit(): void {
    this.signaturePad?.set('minWidth', 5);
    this.signaturePad?.clear();
  }

  drawComplete(event: MouseEvent | Touch) {
    console.log('Completed drawing', event);
    console.log(this.signaturePad?.toDataURL());
  }

  drawStart(event: MouseEvent | Touch) {
    console.log('Start drawing', event);
  }
}
