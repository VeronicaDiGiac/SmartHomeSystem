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
      img: '../../assets/icon/fridge.png',
    },
    {
      id: 2,
      titolo: 'Router',
      colore: 'success',
      img: '../../assets/icon/wifi-router.png',
    },
    {
      id: 3,
      titolo: 'Lamps',
      colore: 'info ',
      img: '../../assets/icon/light.png',
    },
    {
      id: 4,
      titolo: 'Music System',
      colore: 'warning',
      img: '../../assets/icon/music.png',
    },
  ];
  listaDatiRoomsCards: Array<any> = [
    {
      id: 1,
      titolo: 'Refrigerator',
      img: '../../assets/icon/fridge.png',
    },
    {
      id: 2,
      titolo: 'AirConditioner',
      img: '../../assets/icon/air-conditioner.png',
    },
    {
      id: 3,
      titolo: 'Lamps',
      img: '../../assets/icon/light.png',
    },
    {
      id: 4,
      titolo: 'Temperature',
      img: '../../assets/icon/thermometer.png',
    },
  ];
  constructor() {}
}
