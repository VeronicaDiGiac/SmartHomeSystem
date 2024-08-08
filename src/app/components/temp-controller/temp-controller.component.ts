import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleChanges } from '@angular/core';
import { listaDatiRoomsCardModel } from '../../Models/dati.model';
import { TempControlPanelComponent } from '../temp-control-panel/temp-control-panel.component';

@Component({
  selector: 'app-temp-controller',
  standalone: true,
  imports: [CommonModule, TempControlPanelComponent],
  templateUrl: './temp-controller.component.html',
  styleUrl: './temp-controller.component.css',
})

// fornisce il pannello di controllo per la temperatura
export class TempControllerComponent implements OnChanges {
  title: string = 'titolo provvisorio';
  // rappresentano i valori predefiniti dei dispositivi
  currentIndexFridge: number = 2;
  currentIndexAirCond: number = 23;
  currentIndexTemperature: number = 20;
  currentIndexLights: number = 10;
  // intervalli minimi e massimi dei dispositivi
  intervalValueFridge: [number, number] = [0, 5];
  interValueAirCond: [number, number] = [15, 32];
  interValueTemperature: [number, number] = [15, 35];
  interValueLights: [number, number] = [0, 35];

  //  ho salvato dentro la proprietà selectedDevice tipizzata con il modello listadaticardmodel , perchè continene l'id delle card e gliele posso passare allo Switch.
  @Input() selectedDevice!: listaDatiRoomsCardModel;

  // Controlla se selectedDevice è cambiato e, in tal caso, chiama updateCurrentTemplate() per gestire il cambiamento.
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedDevice']) {
      this.updateCurrentTemplate();
    }
  }

  updateCurrentTemplate() {
    console.log('Selected Device ID:', this.selectedDevice?.id);
  }

  // metodo per aggiornare l'indeice corrente
  updateIndex(type: string, newIndex: number) {
    switch (type) {
      case 'fridge':
        this.currentIndexFridge = newIndex;
        break;
      case 'airCond':
        this.currentIndexAirCond = newIndex;
        break;
      case 'lights':
        this.currentIndexLights = newIndex;
        break;
      case 'temperature':
        this.currentIndexTemperature = newIndex;
        break;
      default:
        break;
    }
  }
}
