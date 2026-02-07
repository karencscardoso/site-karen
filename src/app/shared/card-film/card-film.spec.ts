import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilm } from './card-film';

describe('CardFilm', () => {
  let component: CardFilm;
  let fixture: ComponentFixture<CardFilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFilm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFilm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
