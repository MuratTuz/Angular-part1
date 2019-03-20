import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { PictureComponent } from "../picture/picture.component";
import { DetailedInformationComponent } from "../detailed-information/detailed-information.component";
import { SubAppComponent } from "../sub-app/sub-app.component";

const firstRouter: Routes = [
      { path:'detail/:name', component: DetailedInformationComponent,
      children: [
        { path:'picture/:picName', component: PictureComponent }
      ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(firstRouter)
  ],
  exports: [
    RouterModule
  ]
})
export class FirstRoutingModule { }
