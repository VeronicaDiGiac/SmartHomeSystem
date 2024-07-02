import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titolo',
  standalone: true,
  imports: [],
  templateUrl: './titolo.component.html',
  styleUrl: './titolo.component.css',
})
export class TitoloComponent {
  @Input() text!: string;
}
