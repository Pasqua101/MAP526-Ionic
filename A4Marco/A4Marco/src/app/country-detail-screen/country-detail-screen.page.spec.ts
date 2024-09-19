import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailScreenPage } from './country-detail-screen.page';

describe('CountryDetailScreenPage', () => {
  let component: CountryDetailScreenPage;
  let fixture: ComponentFixture<CountryDetailScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
