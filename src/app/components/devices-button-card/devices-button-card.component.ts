import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { listaCardModel } from '../../Models/dati.model';

@Component({
  selector: 'app-devices-button-card',
  standalone: true,
  imports: [],
  templateUrl: './devices-button-card.component.html',
  styleUrl: './devices-button-card.component.css',
})
export class DevicesButtonCardComponent {
  @Input() datoCard!: listaCardModel;
}
