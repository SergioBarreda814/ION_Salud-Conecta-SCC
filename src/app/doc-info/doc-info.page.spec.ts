import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocInfoPage } from './doc-info.page';

describe('DocInfoPage', () => {
  let component: DocInfoPage;
  let fixture: ComponentFixture<DocInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
