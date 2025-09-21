import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment2 } from './assignment2';

describe('Assignment2', () => {
  let component: Assignment2;
  let fixture: ComponentFixture<Assignment2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
