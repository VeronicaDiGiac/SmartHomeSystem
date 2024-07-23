import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  // constructor() {
  //   // StoredValue è una Variabile che prende il valore del value attraverso la funzione getItem di LocalStorage(SERVIZIOAPIJAVASCIPT) dunque il metodo restituisce il valore della chiave
  //   // const storedValue = localStorage.getItem(this.inputKey);
  // }
  // private readonly inputKey = 'lastInput';
  // private inputValueSignal = signal<string>('');
  // constructor() {
  //   // Recupera il valore iniziale da localStorage
  //   const storedValue = localStorage.getItem(this.inputKey);
  //   if (storedValue !== null) {
  //     this.inputValueSignal.update(() => storedValue);
  //   }
  // }
  // // Metodo per ottenere il Signal dell'inputValue
  // getInputValueSignal(): Signal<string> {
  //   return this.inputValueSignal;
  // }
  // // Metodo per salvare l'input corrente in localStorage e aggiornare il Signal
  // saveInputValue(value: string): void {
  //   localStorage.setItem(this.inputKey, value);
  //   this.inputValueSignal.update(() => value);
  // }
  // // Metodo per rimuovere l'ultimo valore dell'input salvato da localStorage e azzerare il Signal
  // clearLastInputValue(): void {
  //   localStorage.removeItem(this.inputKey);
  //   this.inputValueSignal.update(() => '');
  // }
}
