import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ti } from './ti';

describe('Ti', () => {
  let component: Ti;
  let fixture: ComponentFixture<Ti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
