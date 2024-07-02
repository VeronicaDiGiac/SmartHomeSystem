import { Component } from '@angular/core';
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'smart-home-system-app';
  constructor(public datiService: datiService) {}
}
