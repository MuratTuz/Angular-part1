import { Injectable } from '@angular/core';
import { CITIES, CITYINFO } from "../shared/cities";
import { CityInfo } from "../shared/cityinfo";
import { Observable, of } from "rxjs";

@Injectable() //({providedIn: 'root'})
export class CityserviceService {

  constructor() { }

  getCityInfo(pName:string): Observable<CityInfo> {
    return of(CITYINFO.find(item => item.name === pName));
  }
}
