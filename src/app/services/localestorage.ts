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
}
