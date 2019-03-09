import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'sub-app',
  templateUrl: './sub-app.component.html',
  styleUrls: ['./sub-app.component.scss']
})
export class SubAppComponent implements OnInit {

  @Input() boxArray:string[];

  @Output() conductor : EventEmitter<string> = new EventEmitter();

  conduct(pvalue):void {
    this.conductor.emit(pvalue.value);
    console.log(pvalue.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
