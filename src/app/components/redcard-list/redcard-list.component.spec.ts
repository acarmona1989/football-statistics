import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedcardListComponent } from './redcard-list.component';

describe('RedcardListComponent', () => {
  let component: RedcardListComponent;
  let fixture: ComponentFixture<RedcardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedcardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedcardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
