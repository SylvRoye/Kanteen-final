import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


export type Information = {
  id:number
  description:string
  entitled:string
  expiry:string
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  informations: Information[] = [];
  information : Information;

  constructor(public http : HttpClient) {

  }

  informationUrl = 'http://localhost:8585/api/informations';

  getInformation() {
    return this.http.get(this.informationUrl);
  }

  getAllInformations(){
    this.http.get(this.informationUrl)
      .subscribe((result:any[]) => {
        this.informations = result

      });
  }
}