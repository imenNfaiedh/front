import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionClientComponent } from './action-client.component';

describe('ActionClientComponent', () => {
  let component: ActionClientComponent;
  let fixture: ComponentFixture<ActionClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
