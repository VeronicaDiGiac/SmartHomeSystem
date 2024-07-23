import {
  Component,
  input,
  Input,
  ViewChild,
  OnChanges,
  AfterViewInit,
} from '@angular/core';
import { TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

import { SimpleChanges } from '@angular/core';
import { listaDatiRoomsCardModel } from '../../Models/dati.model';

@Component({
  selector: 'app-temp-controller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp-controller.component.html',
  styleUrl: './temp-controller.component.css',
})
export class TempControllerComponent implements OnChanges {
  @Input() title: string = ' titolo provvisorio';

  @Input() selectedRoom!: listaDatiRoomsCardModel;

  @ViewChild('template1') template1!: TemplateRef<any>;
  @ViewChild('template2') template2!: TemplateRef<any>;
  @ViewChild('template3') template3!: TemplateRef<any>;

  currentTemplate!: TemplateRef<any>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedRoom']) {
      // Utilizza setTimeout per garantire che la vista sia aggiornata
      setTimeout(() => {
        console.log('Template1:', this.template1);
        console.log('Template2:', this.template2);
        console.log('Template3:', this.template3);
        this.updateCurrentTemplate();
      });
    }
  }

  updateCurrentTemplate() {
    if (this.selectedRoom) {
      switch (this.selectedRoom.id) {
        case 1:
          this.currentTemplate = this.template1;
          break;
        case 2:
          this.currentTemplate = this.template2;
          break;
        case 3:
          this.currentTemplate = this.template3;
          break;
      }
    }
  }
}
