import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPComponent } from './up.component';

describe('UPComponent', () => {
  let component: UPComponent;
  let fixture: ComponentFixture<UPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UPComponent]
    });
    fixture = TestBed.createComponent(UPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
