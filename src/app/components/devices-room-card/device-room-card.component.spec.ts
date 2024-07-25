import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRoomCardComponent } from './device-room-card';

describe('DeviceRoomCardComponent', () => {
  let component: DeviceRoomCardComponent;
  let fixture: ComponentFixture<DeviceRoomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceRoomCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceRoomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
