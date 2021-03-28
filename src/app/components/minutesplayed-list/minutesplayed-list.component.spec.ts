import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesplayedListComponent } from './minutesplayed-list.component';

describe('MinutesplayedListComponent', () => {
  let component: MinutesplayedListComponent;
  let fixture: ComponentFixture<MinutesplayedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinutesplayedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesplayedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
