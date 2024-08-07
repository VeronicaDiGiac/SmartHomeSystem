import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  OnInit,
  AfterViewInit,
  input,
} from '@angular/core';
import { TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleChanges } from '@angular/core';
import { listaDatiRoomsCardModel } from '../../Models/dati.model';

@Component({
  selector: 'app-temp-controller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp-controller.component.html',
  styleUrl: './temp-controller.component.css',
})
export class TempControllerComponent
  implements OnChanges, OnInit, AfterViewInit
{
  title: string = 'titolo provvisorio';
  currentIndexFridge: number = 2;
  currentIndexAirCond: number = 23;
  currentIndexTemperature: number = 20;
  intervalValueFridge: Array<number> = [0, 5];
  interValueAirCond: Array<number> = [15, 32];
  interValueTemperature: Array<number> = [15, 35];

  //  ho salvato dentro la proprietà selected room tipizzata con le proprietà di ogni scheda con dentro frigo, condizionatore ecc, perchè continene l'id delle card e gliele posso passare allo Switch
  @Input() selectedDevice!: listaDatiRoomsCardModel;

  @ViewChild('template1') template1!: TemplateRef<any>;
  @ViewChild('template2') template2!: TemplateRef<any>;
  @ViewChild('template3') template3!: TemplateRef<any>;
  @ViewChild('template4') template4!: TemplateRef<any>;

  currentTemplate: TemplateRef<any> = this.template1;

  // PER IL DEBUG
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.template1) {
        console.log('afterviewininit template1');
      } else {
        console.log('afterviewininit undefined');
      }
      this.currentTemplate = this.template1;
    });
  }
  // DEBUG
  ngOnInit() {
    if (this.template1) {
      console.log('oninit template1');
    } else {
      console.log('oninit undefined');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedDevice']) {
      // Utilizza setTimeout aggiornamento view
      setTimeout(() => {
        if (this.template1) {
          console.log('onchanges template1');
        } else {
          console.log('onchanges undefined');
        }

        console.log('Template1:', this.template1);
        console.log('Template2:', this.template2);
        console.log('Template3:', this.template3);
        console.log('Template4:', this.template4);

        this.updateCurrentTemplate();
      });
    }
  }

  updateCurrentTemplate() {
    if (this.selectedDevice) {
      switch (this.selectedDevice.id) {
        case 1:
          this.currentTemplate = this.template1;
          break;
        case 2:
          this.currentTemplate = this.template2;
          break;
        case 3:
          this.currentTemplate = this.template3;
          break;
        case 4:
          this.currentTemplate = this.template2;
          break;
        default:
          this.currentTemplate = this.template1;
      }
    }
  }

  incrm(maxValue: number, index: number) {
    console.log('incrm chiamata ');
    if (index < maxValue) {
      console.log(index);
      index += 1;
    }
    return index;
  }

  decrm(minValue: number, index: number) {
    console.log('decrm chiamata ');
    if (index > minValue) {
      console.log(index);
      index -= 1;
      console.log(index);
    }
    return index;
  }
}
