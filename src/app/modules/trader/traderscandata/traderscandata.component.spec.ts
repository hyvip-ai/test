import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderscandataComponent } from './traderscandata.component';

describe('TraderscandataComponent', () => {
  let component: TraderscandataComponent;
  let fixture: ComponentFixture<TraderscandataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderscandataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderscandataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
