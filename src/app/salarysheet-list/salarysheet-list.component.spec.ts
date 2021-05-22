import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarysheetListComponent } from './salarysheet-list.component';

describe('SalarysheetListComponent', () => {
  let component: SalarysheetListComponent;
  let fixture: ComponentFixture<SalarysheetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarysheetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarysheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
