import {
  ApplicationConfig,
  provideZoneChangeDetection,
  // importProvidersFrom,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideRdxDialogConfig } from '@radix-ng/primitives/dialog';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withRouterConfig({})),
    provideHttpClient(),
    provideRdxDialogConfig(),
    // importProvidersFrom(),
  ],
};
