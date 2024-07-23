import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempControllerComponent } from './temp-controller.component';

describe('TempControllerComponent', () => {
  let component: TempControllerComponent;
  let fixture: ComponentFixture<TempControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
