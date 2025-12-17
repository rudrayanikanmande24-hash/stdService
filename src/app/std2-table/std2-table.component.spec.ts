import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std2TableComponent } from './std2-table.component';

describe('Std2TableComponent', () => {
  let component: Std2TableComponent;
  let fixture: ComponentFixture<Std2TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Std2TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
