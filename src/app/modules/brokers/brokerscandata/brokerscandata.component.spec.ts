import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerscandataComponent } from './brokerscandata.component';

describe('BrokerscandataComponent', () => {
  let component: BrokerscandataComponent;
  let fixture: ComponentFixture<BrokerscandataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerscandataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerscandataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
