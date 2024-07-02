import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { listaCardModel } from '../../Models/dati.model';

@Component({
  selector: 'app-button-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button-card.component.html',
  styleUrl: './button-card.component.css',
})
export class ButtonCardComponent {
  @Input() datoCard!: listaCardModel;
}
