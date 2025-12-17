import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std3TableComponent } from './std3-table.component';

describe('Std3TableComponent', () => {
  let component: Std3TableComponent;
  let fixture: ComponentFixture<Std3TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Std3TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std3TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
