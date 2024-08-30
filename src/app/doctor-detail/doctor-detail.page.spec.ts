import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorDetailPage } from './doctor-detail.page';

describe('DoctorDetailPage', () => {
  let component: DoctorDetailPage;
  let fixture: ComponentFixture<DoctorDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
