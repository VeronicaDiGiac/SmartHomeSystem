import { Component, Input, OnInit } from '@angular/core';
// import { datiModel } from '../../Models/dati.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { WeatherResponseModel } from '../../Models/dati.model';
import { LocalStorageService } from '../../services/localestorage';

@Component({
  selector: 'app-wheather-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wheather-card.component.html',
  styleUrls: ['./wheather-card.component.css'],
})
export class WheathercardComponent implements OnInit {
  // @Input() dato!: datiModel;

  @Input() inputCityValue: string = '';

  @Input() responseData!: any; // Tipizzati come any per il debug

  @Input() responseDataWheater!: WeatherResponseModel;
  // Per azzerare il contenuto delle variabili senza tipizzare a any puoi modifcare l'interfaccia assegnando alle proprietà interessate | null

  constructor(
    private apiService: ApiService,
    private LocalStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    // Recupera i dati salvati nel LocalStorage quando il componente viene inizializzato
    this.responseDataWheater = this.LocalStorageService.getItem(
      'responseDataWheater'
    );
    this.inputCityValue = this.LocalStorageService.getItem('inputCityValue');
  }

  wheatherManager() {
    console.log(this.inputCityValue);
    // Salva l'input della città nel LocalStorage
    this.LocalStorageService.setItem('inputCityValue', this.inputCityValue);
    this.getCityData(this.inputCityValue);
  }

  getCityData(inputCityValue: string) {
    this.apiService.getCityName(inputCityValue).subscribe((response) => {
      console.log('getCityName response:', response);

      // Esempio di controllo della struttura della risposta
      if (
        response &&
        Array.isArray(response.results) &&
        response.results.length > 0
      ) {
        const latitude = response.results[0].latitude;
        const longitude = response.results[0].longitude;
        console.log('Latitude:', latitude, 'Longitude:', longitude);

        if (latitude != undefined && longitude != undefined) {
          this.getWeatherData(latitude, longitude);
          console.log('getWeatherData chiamata');
        }
      } else {
        console.log('No results ');
      }
    });
  }

  getWeatherData(latitude: number, longitude: number) {
    this.apiService.getWeather(latitude, longitude).subscribe((response) => {
      console.log('getWeather response:', response);

      this.responseDataWheater = response;
      this.LocalStorageService.setItem('responseDataWheater', response); // Salva i dati nel LocalStorage SUBITO DOPO LA CHIAMATA API.
      console.log(
        'this.LocalStorageService response:',
        this.LocalStorageService.getItem('responseDataWheater')
      );
    });
  }

  clearData() {
    this.LocalStorageService.removeItem('responseDataWheater');
    this.LocalStorageService.removeItem('inputCityValue');
    // Rimozione dei dati dal LocalStorage
  }
}
