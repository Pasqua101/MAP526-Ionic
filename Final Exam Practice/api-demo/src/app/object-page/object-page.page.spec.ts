import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjectPagePage } from './object-page.page';

describe('ObjectPagePage', () => {
  let component: ObjectPagePage;
  let fixture: ComponentFixture<ObjectPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
