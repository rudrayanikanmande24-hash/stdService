import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std5TableComponent } from './std5-table.component';

describe('Std5TableComponent', () => {
  let component: Std5TableComponent;
  let fixture: ComponentFixture<Std5TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Std5TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std5TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
