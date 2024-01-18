import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitedCardsPage } from './visited-cards.page';

describe('VisitedCardsPage', () => {
  let component: VisitedCardsPage;
  let fixture: ComponentFixture<VisitedCardsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisitedCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
