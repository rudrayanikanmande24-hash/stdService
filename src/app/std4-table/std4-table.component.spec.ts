import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std4TableComponent } from './std4-table.component';

describe('Std4TableComponent', () => {
  let component: Std4TableComponent;
  let fixture: ComponentFixture<Std4TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Std4TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std4TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
