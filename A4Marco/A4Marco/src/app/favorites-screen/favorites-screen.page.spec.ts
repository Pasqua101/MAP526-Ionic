import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesScreenPage } from './favorites-screen.page';

describe('FavoritesScreenPage', () => {
  let component: FavoritesScreenPage;
  let fixture: ComponentFixture<FavoritesScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
