import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombankListComponent } from './cmobank-list.component';

describe('EmployeeListComponent', () => {
  let component: CombankListComponent;
  let fixture: ComponentFixture<CombankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombankListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
