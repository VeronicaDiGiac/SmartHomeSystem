import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempControlPanelComponent } from './temp-control-panel.component';

describe('TempControlPanelComponent', () => {
  let component: TempControlPanelComponent;
  let fixture: ComponentFixture<TempControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempControlPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
