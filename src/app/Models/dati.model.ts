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

// export interface Meteo {
//   latitude: number;
//   longitude: number;
//   generationtime_ms: number;
//   utc_offset_seconds: number;
//   timezone: string;
//   timezone_abbreviation: string;
//   elevation: number;
//   current_units: CurrentUnits;
//   current: Current;
//   hourly_units: HourlyUnits;
//   hourly: Hourly;
// }

// export interface CurrentUnits {
//   time: string;
//   interval: string;
//   temperature_2m: string;
//   precipitation: string;
//   wind_speed_10m: string;
// }

// export interface Current {
//   time: string;
//   interval: number;
//   temperature_2m: number;
//   precipitation: number;
//   wind_speed_10m: number;
// }

// export interface HourlyUnits {
//   time: string;
//   temperature_2m: string;
// }

// export interface Hourly {
//   time: string[];
//   temperature_2m: number[];
// }

// export interface DataCityModel {
//   id: number;
//   name: string;
//   latitude: number;
//   longitude: number;
//   elevation: number;
//   feature_code: string;
//   country_code: string;
//   admin1_id: number;
//   admin3_id: number;
//   timezone: string;
//   population: number;
//   country_id: number;
//   country: string;
//   admin1: string;
//   admin3: string;
// }

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
