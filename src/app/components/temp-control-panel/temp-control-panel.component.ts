import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-temp-control-panel',
  standalone: true,
  imports: [],
  templateUrl: './temp-control-panel.component.html',
  styleUrl: './temp-control-panel.component.css',
})

// Questo componente viene utilizzato per controllare e visualizzare i valori numerici che possono essere incrementati o decrementati attraverso i pulsanti "+" e "-". Per adesso non ho scritto le classi che verranno applicate dinamicamente per ogni template.
export class TempControlPanelComponent {
  @Input() currentIndex: number = 0;
  // Definisce una proprietà di input currentIndex che rappresenta il valore corrente. Questa proprietà può essere impostata dal componente genitore.
  @Input() interval: [number, number] = [0, 0];
  // Definisce una proprietà di input interval che rappresenta un array di due numeri. Questi numeri definiscono i limiti (minimo e massimo) per il valore currentIndex.
  @Output() indexChange = new EventEmitter<number>();
  // Definisce una proprietà di output indexChange, che è un oggetto EventEmitter usato per emettere eventi verso il componente genitore ogni volta che il valore di currentIndex cambia.

  incr() {
    if (this.currentIndex < this.interval[1]) {
      this.currentIndex++;
      this.indexChange.emit(this.currentIndex);
    }
    // Verifica se currentIndex è inferiore al valore massimo (this.interval[1]).
    // Se vero, incrementa currentIndex di 1.
    // Emette un evento indexChange con il nuovo valore di currentIndex.
  }

  decr() {
    if (this.currentIndex > this.interval[0]) {
      this.currentIndex--;
      this.indexChange.emit(this.currentIndex);
    }
  }
  // stessa cosa ma in decrementazione
}
