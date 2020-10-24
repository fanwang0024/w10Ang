import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addactor2movieComponent } from './addactor2movie.component';

describe('Addactor2movieComponent', () => {
  let component: Addactor2movieComponent;
  let fixture: ComponentFixture<Addactor2movieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Addactor2movieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Addactor2movieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
