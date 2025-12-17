import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std5FormComponent } from './std5-form.component';

describe('Std5FormComponent', () => {
  let component: Std5FormComponent;
  let fixture: ComponentFixture<Std5FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Std5FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
