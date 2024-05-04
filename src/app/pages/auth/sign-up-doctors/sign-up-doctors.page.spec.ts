import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpDoctorsPage } from './sign-up-doctors.page';

describe('SignUpDoctorsPage', () => {
  let component: SignUpDoctorsPage;
  let fixture: ComponentFixture<SignUpDoctorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpDoctorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
