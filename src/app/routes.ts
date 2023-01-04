import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'camera',
    loadComponent: () =>
      import('./camera.component').then((mod) => mod.CameraComponent),
  },
  {
    path: 'sign-pad',
    loadComponent: () =>
      import('./sign-pad.component').then((mod) => mod.SignPadComponent),
  },
];
