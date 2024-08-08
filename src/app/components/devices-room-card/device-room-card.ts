import { Component, Input, Output, EventEmitter } from '@angular/core';
import { listaDatiRoomsCardModel } from '../../Models/dati.model';

@Component({
  selector: 'app-device-room-card',
  standalone: true,
  imports: [],
  templateUrl: './device-room-card.component.html',
  styleUrl: './device-room-card.component.css',
})
export class DeviceRoomCardComponent {
  @Input() datiRoomsCard!: listaDatiRoomsCardModel;
  @Output() deviceSelected: EventEmitter<any> = new EventEmitter();

  selectedDevice() {
    this.deviceSelected.emit(this.datiRoomsCard);
  }
}
