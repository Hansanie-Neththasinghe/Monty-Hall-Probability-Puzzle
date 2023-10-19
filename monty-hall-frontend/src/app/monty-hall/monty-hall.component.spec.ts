import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontyHallComponent } from './monty-hall.component';

describe('MontyHallComponent', () => {
  let component: MontyHallComponent;
  let fixture: ComponentFixture<MontyHallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MontyHallComponent]
    });
    fixture = TestBed.createComponent(MontyHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //=============================================
  
  it('should have an initial number of simulations equal to 1', () => {
    expect(component.numberOfSimulations).toEqual(1);
  });

  it('should have an initial choice of switching door as no', () => {
    expect(component.changeDoor).toEqual("no");
  });
  
  
});
