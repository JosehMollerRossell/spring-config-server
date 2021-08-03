import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidefacilComponent } from './asidefacil.component';

describe('AsidefacilComponent', () => {
  let component: AsidefacilComponent;
  let fixture: ComponentFixture<AsidefacilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsidefacilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidefacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
