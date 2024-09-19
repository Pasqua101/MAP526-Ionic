import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceiptScreenPage } from './receipt-screen.page';

describe('ReceiptScreenPage', () => {
  let component: ReceiptScreenPage;
  let fixture: ComponentFixture<ReceiptScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
