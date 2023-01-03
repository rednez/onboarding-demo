import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<h2>OnBoarding Demo App</h2>
  <button (click)="gotoCamera()">Camera</button>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(private router: Router) {
  }

  gotoCamera() {
    this.router.navigate(['camera']);
  }
}
