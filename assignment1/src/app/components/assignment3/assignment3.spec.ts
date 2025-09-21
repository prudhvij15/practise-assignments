import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3 } from './assignment3';

describe('Assignment3', () => {
  let component: Assignment3;
  let fixture: ComponentFixture<Assignment3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
