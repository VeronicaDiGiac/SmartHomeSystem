import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getCityName(inputCityValue: string): Observable<any> {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${inputCityValue}&count=10&language=en&format=json`;
    return this.http.get<any>(url);
  }

  public getWeather(latitude: number, longitude: number): Observable<any> {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m`;
    return this.http.get<any>(weatherUrl);
  }
}
