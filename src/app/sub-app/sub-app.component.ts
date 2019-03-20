import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CITIES } from "../shared/cities";


@Component({
  selector: 'sub-app',
  templateUrl: './sub-app.component.html',
  styleUrls: ['./sub-app.component.scss']
})
export class SubAppComponent implements OnInit {

  @Input() boxArray:string[];

  @Output() conductor : EventEmitter<string> = new EventEmitter();
  @Output() routeEmit : EventEmitter<string> = new EventEmitter();

  selectArray: string[];
  matSelectPlaceHolder:string;

  conduct(pvalue):void {
    this.conductor.emit(pvalue.value);
    console.log(pvalue.value);
  }

  
  fnHero() {
    this.selectArray = this.boxArray;
    this.matSelectPlaceHolder = 'Favorite Hero';
    this.routeEmit.emit('Router is PASSIVE')
  }

  fnCity() {
    this.selectArray = CITIES;
    this.matSelectPlaceHolder = 'Favorite City';
    this.routeEmit.emit('Router is ACTIVE');
    console.log(this.matSelectPlaceHolder);
  }
  constructor() { }

  ngOnInit() {
    this.fnHero();
  }

}
