import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std3FormComponent } from './std3-form.component';

describe('Std3FormComponent', () => {
  let component: Std3FormComponent;
  let fixture: ComponentFixture<Std3FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Std3FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
