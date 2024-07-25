export interface datiModel {
  id: number;
  titolo: string;
  paragrafo: string;
  temperatura: string;
  umidita: string;
  vento: string;
  backgroundImg: string;
}

export interface listaCardModel {
  id: number;
  titolo: string;
  colore: string;
  img: string;
}

export interface WeatherResponseModel {
  current: {
    interval: number;
    precipitation: number;
    relative_humidity_2m: number;
    temperature_2m: number;
    time: string;
    wind_speed_10m: number;
  };
  current_units: {
    interval: string;
    precipitation: string;
    relative_humidity_2m: string;
    temperature_2m: string;
    time: string;
    wind_speed_10m: string;
  };
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

export interface listaDatiRoomsCardModel {
  id: number;
  titolo: string;
  img: string;
}
