import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCollaborateurComponent } from './action-collaborateur.component';

describe('ActionCollaborateurComponent', () => {
  let component: ActionCollaborateurComponent;
  let fixture: ComponentFixture<ActionCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
