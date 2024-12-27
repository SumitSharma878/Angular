import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiharComponent } from './bihar.component';

describe('BiharComponent', () => {
  let component: BiharComponent;
  let fixture: ComponentFixture<BiharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiharComponent]
    });
    fixture = TestBed.createComponent(BiharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
