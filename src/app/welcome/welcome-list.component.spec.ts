import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeListComponent } from './welcome-list.component';



describe('EmployeeListComponent', () => {
  let component: WelcomeListComponent;
  let fixture: ComponentFixture<WelcomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
