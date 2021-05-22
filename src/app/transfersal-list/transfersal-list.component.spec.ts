import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersalListComponent } from './transfersal-list.component';

describe('EmployeeListComponent', () => {
  let component: TransfersalListComponent;
  let fixture: ComponentFixture<TransfersalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfersalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
