import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityserviceService } from "../services/cityservice.service";
import { CityInfo } from "../shared/cityinfo";


@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {

  constructor( private route: ActivatedRoute, 
    private cityService: CityserviceService) { }

  info: CityInfo;

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    this.cityService.getCityInfo(name).subscribe(pInfo => this.info = pInfo);
    console.log(this.info.name+'detail');
  }

  
}
