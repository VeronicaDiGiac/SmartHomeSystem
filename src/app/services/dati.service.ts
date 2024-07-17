import { Injectable } from '@angular/core';
import { listaCardModel } from '../Models/dati.model';

@Injectable({
  providedIn: 'root',
})
export class datiService {
  listaDati: Array<any> = [
    {
      id: 1,
      titolo: 'Welcome Veronica!',
      paragrafo: 'Oggi è una bella giornata',
      temperatura: '25°C',
      umidita: '60%',
      vento: '10 km/h',
      backgroundImg: '',
    },
  ];
  listaDatiOnOffDevices: Array<listaCardModel> = [
    {
      id: 1,
      titolo: 'Refrigerator',
      colore: 'primary',
    },
    { id: 2, titolo: 'Router', colore: 'success' },
    { id: 3, titolo: 'Lamps', colore: 'info ' },
    { id: 4, titolo: 'Music System', colore: 'warning' },
  ];
  constructor() {}
}
