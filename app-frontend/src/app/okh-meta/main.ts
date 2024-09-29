import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { OkhComponent } from '../okh/okh.component';

bootstrapApplication(OkhComponent, appConfig).catch((err) => console.error(err));
