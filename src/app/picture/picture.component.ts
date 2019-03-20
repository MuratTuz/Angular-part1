import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CityserviceService } from "../services/cityservice.service";
import { CityInfo } from "../shared/cityinfo";

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  constructor( private route: ActivatedRoute, 
    private cityService: CityserviceService) { }

  info: CityInfo;

  ngOnInit() {
    const name = this.route.snapshot.params['picName'];
    this.cityService.getCityInfo(name).subscribe(pInfo => this.info = pInfo);
  }
}
