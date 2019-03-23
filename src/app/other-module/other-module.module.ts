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
import { EmptyComponent } from '../empty/empty.component';

@NgModule({
  declarations: [
    SubAppComponent,
    DetailedInformationComponent,
    PictureComponent,
    EmptyComponent
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
    CityserviceService  
  ],
  exports: [
    SubAppComponent,
    DetailedInformationComponent,
    PictureComponent,
    EmptyComponent
  ]
})
export class OtherModuleModule { }
