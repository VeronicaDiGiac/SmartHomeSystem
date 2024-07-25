import { Component } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitoloComponent } from '../titolo/titolo.component';
import { WheathercardComponent } from '../wheater-card/wheather-card.component';
import { datiService } from '../../services/dati.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { DevicesButtonCardComponent } from '../devices-button-card/devices-button-card.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { DeviceRoomCardComponent } from '../devices-room-card/device-room-card';
import { TempControllerComponent } from '../temp-controller/temp-controller.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TitoloComponent,
    WheathercardComponent,
    NavbarComponent,
    DevicesButtonCardComponent,
    DropdownComponent,
    ProfileCardComponent,
    DeviceRoomCardComponent,
    TempControllerComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  responseApi!: any;
  selectedDevice: any;
  constructor(public datiService: datiService) {}

  onDeviceSelected(device: any) {
    this.selectedDevice = device;
  }
}
