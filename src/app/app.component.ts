import { Component, TemplateRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitoloComponent } from './components/titolo/titolo.component';
import { CardComponent } from './components/card/card.component';
import { datiService } from './services/dati.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonCardComponent } from './components/button-card/button-card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { TempControllerComponent } from './components/temp-controller/temp-controller.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitoloComponent,
    CardComponent,
    NgFor,
    NavbarComponent,
    ButtonCardComponent,
    NgClass,
    ProfileCardComponent,
    DropdownComponent,
    RoomCardComponent,
    TempControllerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'smart-home-system-app';
  responseApi!: any;
  selectedRoom: any;
  constructor(public datiService: datiService) {}
  // , private apiService: ApiService) {
  //   this.apiService
  //     .getDailyMeteo()
  //     .subscribe((response) => {console.log(response)
  //     this.responseApi= response
  //     });
  onRoomSelected(room: any) {
    this.selectedRoom = room;
  }
}
