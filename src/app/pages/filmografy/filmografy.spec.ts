import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filmografy } from './filmografy';

describe('Filmografy', () => {
  let component: Filmografy;
  let fixture: ComponentFixture<Filmografy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Filmografy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filmografy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
