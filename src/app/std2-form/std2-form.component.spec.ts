import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std2FormComponent } from './std2-form.component';

describe('Std2FormComponent', () => {
  let component: Std2FormComponent;
  let fixture: ComponentFixture<Std2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Std2FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
