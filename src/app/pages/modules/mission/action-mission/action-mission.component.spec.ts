import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMissionComponent } from './action-mission.component';

describe('ActionMissionComponent', () => {
  let component: ActionMissionComponent;
  let fixture: ComponentFixture<ActionMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
