import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainDoctorPage } from './main-doctor.page';

describe('MainDoctorPage', () => {
  let component: MainDoctorPage;
  let fixture: ComponentFixture<MainDoctorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
