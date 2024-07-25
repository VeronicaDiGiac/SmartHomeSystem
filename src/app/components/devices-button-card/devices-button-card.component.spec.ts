import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesButtonCardComponent } from './devices-button-card.component';

describe('ButtonCardComponent', () => {
  let component: DevicesButtonCardComponent;
  let fixture: ComponentFixture<DevicesButtonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevicesButtonCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevicesButtonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
