import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoDoctorPage } from './info-doctor.page';

describe('InfoDoctorPage', () => {
  let component: InfoDoctorPage;
  let fixture: ComponentFixture<InfoDoctorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
