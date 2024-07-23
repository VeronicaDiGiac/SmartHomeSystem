import { Component, Input, Output, EventEmitter } from '@angular/core';
import { listaDatiRoomsCardModel } from '../../Models/dati.model';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.css',
})
export class RoomCardComponent {
  @Input() datiRoomsCard!: listaDatiRoomsCardModel;
  @Output() roomSelected: EventEmitter<any> = new EventEmitter();

  selectRoom() {
    this.roomSelected.emit(this.datiRoomsCard);
  }
}
