import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheathercardComponent } from './wheather-card.component';

describe('wheather-cardComponent', () => {
  let component: WheathercardComponent;
  let fixture: ComponentFixture<WheathercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheathercardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WheathercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
