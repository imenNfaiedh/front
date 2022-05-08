import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDepartementComponent } from './action-departement.component';

describe('ActionDepartementComponent', () => {
  let component: ActionDepartementComponent;
  let fixture: ComponentFixture<ActionDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
