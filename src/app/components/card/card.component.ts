import { Component, Input, OnInit } from '@angular/core';
import { datiModel } from '../../Models/dati.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { WeatherResponseModel } from '../../Models/dati.model';
import { LocalStorageService } from '../../services/localestorage';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() dato!: datiModel;
  @Input() inputCityValue: string = '';
  @Input() responseData!: any; // Tipizzati come any per il debug
  @Input() responseDataWheater!: any;
  // Per azzerare il contenuto delle variabili senza tipizzare a any puoi modifcare l'interfaccia assegnando alle proprietà interessate | null

  constructor(
    private apiService: ApiService,
    private LocalStorageService: LocalStorageService
  ) {}

  //Oninit viene eseguito dopo che tutte le proprietà di input del componente sono state inizializzate.A differenza del costruttore, che viene chiamato quando l'istanza del componente è creata, ngOnInit viene chiamato dopo che Angular ha inizializzato completamente il componente. Questo lo rende ideale per operazioni che dipendono dalla completa inizializzazione del componente. Praticamente io salvo i dati effettivamente dopo averli inseriti ed inizializzati dunque ngOninit fa questo.
  ngOnInit() {
    // Recupera i dati salvati nel LocalStorage quando il componente viene inizializzato
    this.responseDataWheater = this.LocalStorageService.getItem(
      'responseDataWheater'
    );
    this.inputCityValue = this.LocalStorageService.getItem('inputCityValue');

    // Questo verifica se i dati sono presenti, altrimenti sarebbe false, dunque prima controlla che esistano e poi gli assegna la variabile.
  }

  getInputValue() {
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
        // Supponiamo di prendere il primo risultato
        // Salva i dati nel LocalStorage SUBITO DOPO LA CHIAMATA API.

        const latitude = response.results[0].latitude;
        const longitude = response.results[0].longitude;
        console.log('Latitude:', latitude, 'Longitude:', longitude);

        if (latitude != undefined && longitude != undefined) {
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
      this.LocalStorageService.setItem('responseDataWheater', response); // Salva i dati nel LocalStorage SUBITO DOPO LA CHIAMATA API.
      console.log(
        'this.LocalStorageService response:',
        this.LocalStorageService.getItem('responseDataWheater')
      );
    });
  }

  clearData() {
    // Azzeramento delle variabili
    this.LocalStorageService.removeItem('responseDataWheater');
    this.LocalStorageService.removeItem('inputCityValue');
    // Rimozione dei dati dal LocalStorage
  }
}
