import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APIService {
   url='https://api.openweathermap.org/data/2.5/weather';
   apikey='054a2071486ae715ddb3ee4ecb09dfd3';
  constructor(private http:HttpClient) { }

getWeatherDataByCoords(lat: any,lng: any){
  let params=new HttpParams().set('lat',lat).set('lon',lng)
  .set('units','imperial').set('appid',this.apikey)
  return this.http.get(this.url,{params});
}
getWeatherDataByCityName(city:string){
  let params=new HttpParams()
  .set('q',city)
  .set('units','imperial')
  .set('appid',this.apikey)

  return this.http.get(this.url,{params})
}

}