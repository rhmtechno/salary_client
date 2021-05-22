import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaidsalaryListComponent } from './paidsalary-list.component';



describe('EmployeeListComponent', () => {
  let component: PaidsalaryListComponent;
  let fixture: ComponentFixture<PaidsalaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidsalaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidsalaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
