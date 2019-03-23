import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CITIES } from "../shared/cities";
import { ActivatedRoute, Router } from '@angular/router';


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
  activateRoting:boolean = false;

  conduct(pvalue):void {
    this.conductor.emit(pvalue.value);
    console.log(pvalue.value);
    if (this.activateRoting) {
      this.router.navigate(['/detail/'+pvalue.value]);
    }
  }

  
  fnHero() {
    this.selectArray = this.boxArray;
    this.matSelectPlaceHolder = 'Favorite Hero';
    this.routeEmit.emit('Router is PASSIVE');
    this.activateRoting = false;
    this.router.navigate(['/']);
  }

  fnCity() {
    this.selectArray = CITIES;
    this.matSelectPlaceHolder = 'Favorite City';
    this.routeEmit.emit('Router is ACTIVE');
    console.log(this.matSelectPlaceHolder);
    this.activateRoting = true; 
  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.fnHero();
  }

}
