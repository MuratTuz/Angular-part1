import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { PictureComponent } from "../picture/picture.component";
import { DetailedInformationComponent } from "../detailed-information/detailed-information.component";
import { EmptyComponent } from "../empty/empty.component";

const firstRouter: Routes = [
  { path:'', component : EmptyComponent,
    children: [
    {path:'?', component: EmptyComponent},
      { path:'detail/:name', component: DetailedInformationComponent,
      children: [
        { path:'?', component: EmptyComponent },
        { path:'picture/:picName', component: PictureComponent }
      ]}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(firstRouter, {onSameUrlNavigation: "reload" })
  ],
  exports: [
    RouterModule
  ]
})
export class FirstRoutingModule { }
