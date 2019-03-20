import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { SubAppComponent } from '../sub-app/sub-app.component';
import { DetailedInformationComponent } from '../detailed-information/detailed-information.component';
import { PictureComponent } from '../picture/picture.component';

import { FirstRoutingModule } from '../routing/first-routing.module';
import { CityserviceService } from "../services/cityservice.service";

@NgModule({
  declarations: [
    SubAppComponent,
    DetailedInformationComponent,
    PictureComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    CityserviceService  // city service may be added if it is not work via app.module
  ],
  exports: [
    SubAppComponent,
    DetailedInformationComponent,
    PictureComponent
  ]
})
export class OtherModuleModule { }
