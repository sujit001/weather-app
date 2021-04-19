import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  lat:any;
  lng:any;
  weather: any;
  city:any;
  input1:any;
  a:any;
  constructor(private weatherService:APIService) {
    
   }

  ngOnInit(): void {
       this.getLocation();
  }
  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
         this.lat=success.coords.latitude;
         this.lng=success.coords.longitude;
         this.weatherService.getWeatherDataByCoords(this.lat,this.lng).subscribe(data=>{
           this.weather=data;
         })
      })
    }

  }
  getCity(city: string){
    
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{
      this.weather=data;
    })
  }
  getOutput(input1:any){

      if(input1==1) {
       this.a="Temperature: "+this.weather.main.temp+" °F";
      }
      else if(input1==2){
        this.a="Pressure: "+this.weather.main.pressure+" HPA";
      }
      else if(input1==3){
        this.a="Wind Speed: "+this.weather.wind.speed+" %";
      }
      else if(input1==0)
         this.a="Terminated..."
      return this.a;
  }
}
