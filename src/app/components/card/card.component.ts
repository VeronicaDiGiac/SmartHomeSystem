import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
import { datiModel } from '../../Models/dati.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() dato!: datiModel;
  img: string =
    'https://t3.ftcdn.net/jpg/06/25/98/80/360_F_625988006_32h8ceOn1gLZaxHrrzSkAv1BSVtnvCfo.jpg';
}
