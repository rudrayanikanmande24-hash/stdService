import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std4FormComponent } from './std4-form.component';

describe('Std4FormComponent', () => {
  let component: Std4FormComponent;
  let fixture: ComponentFixture<Std4FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Std4FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
