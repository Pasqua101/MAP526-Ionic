import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrayPagePage } from './array-page.page';

describe('ArrayPagePage', () => {
  let component: ArrayPagePage;
  let fixture: ComponentFixture<ArrayPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
