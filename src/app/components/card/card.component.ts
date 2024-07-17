import { Component, Input, OnInit } from '@angular/core';
import { datiModel } from '../../Models/dati.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { WeatherResponseModel } from '../../Models/dati.model';
import { LocalStorageService } from '../../services/localestorage';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() dato!: datiModel;
  @Input() inputCityValue: string = '';
  @Input() responseData!: any; // Tipizzato come any per il debug
  @Input() responseDataWheater!: WeatherResponseModel;

  // img: string =
  //   'https://t3.ftcdn.net/jpg/06/25/98/80/360_F_625988006_32h8ceOn1gLZaxHrrzSkAv1BSVtnvCfo.jpg';

  constructor(
    private apiService: ApiService,
    private LocalStorageService: LocalStorageService
  ) {}

  getInputValue() {
    console.log(this.inputCityValue);
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
        this.responseData = response.results[0]; // Supponiamo di prendere il primo risultato
        const latitude = this.responseData.latitude;
        const longitude = this.responseData.longitude;
        console.log('Latitude:', latitude, 'Longitude:', longitude);
        if (latitude !== undefined && longitude !== undefined) {
          this.getWeatherData(latitude, longitude);
          console.log('getWeatherData chiamata');
        }
      } else {
        console.log('No results found for city');
      }
    });
  }

  getWeatherData(latitude: number, longitude: number) {
    this.apiService.getWeather(latitude, longitude).subscribe((response) => {
      console.log('getWeather response:', response);
      this.responseDataWheater = response;
    });
  }

  // ngOnInit(): void {
  //   // Sottoscrive il signal per ottenere il valore iniziale
  //   this.LocalStorageService.getInputValueSignal().subscribe((value) => {
  //     console.log('value');
  //     this.inputCityValue = value;
  //   });
  // }
  // onInputChange(value: string): void {
  //   this.LocalStorageService.saveInputValue(value);
  // }
}

// Salvare città,temperatura, precipitazioni,umidità e vento

// storeWeatherDataToLocalStorage() {
//   this.LocalStorageService.setItem('citta', this.inputCityValue);
//   this.LocalStorageService.setItem(
//     'temperatura',
//     this.responseDataWheater.current.temperature_2m.toString()
//   );
//   this.LocalStorageService.setItem(
//     'precipitazioni',
//     this.responseDataWheater.current.precipitation.toString()
//   );
//   this.LocalStorageService.setItem(
//     'umidita',
//     this.responseDataWheater.current.relative_humidity_2m.toString()
//   );
//   this.LocalStorageService.setItem(
//     'vento',
//     this.responseDataWheater.current.wind_speed_10m.toString()
//   );
// }

// retrieveFromLocalStorage() {
//   const value = this.LocalStorageService.getItem('InputKey');
//   console.log(value);
// }

// versione codice senza controllare la struttura dati della result dell'api.

// export class CardComponent {
//   @Input() dato!: datiModel;
//   @Input() inputCityValue: string = '';
//   @Input() responseData!: any; // Tipizzato come any per il debug
//   @Input() responseDataWheater!: any;
//   img: string =
//     'https://t3.ftcdn.net/jpg/06/25/98/80/360_F_625988006_32h8ceOn1gLZaxHrrzSkAv1BSVtnvCfo.jpg';

//   constructor(private apiService: ApiService) {}

//   getInputValue() {
//     console.log(this.inputCityValue);
//     this.getCityData(this.inputCityValue);
//   }

//   getCityData(inputCityValue: string) {
//     this.apiService.getCityName(inputCityValue).subscribe((response) => {
//       console.log('getCityName response:', response);

//       // Supponiamo che response.results sia sempre un array e contenga dati
//       this.responseData = response.results[0]; // Supponiamo di prendere il primo risultato
//       const latitude = this.responseData.latitude;
//       const longitude = this.responseData.longitude;
//       console.log('Latitude:', latitude, 'Longitude:', longitude);

//       // Chiamata diretta senza controllo
//       this.getWeatherData(latitude, longitude);
//       console.log('getWeatherData chiamata');
//     });
//   }

//   getWeatherData(latitude: number, longitude: number) {
//     this.apiService.getWeather(latitude, longitude).subscribe((response) => {
//       console.log('getWeather response:', response);
//       this.responseDataWheater = response;
//     });
//   }
// }
