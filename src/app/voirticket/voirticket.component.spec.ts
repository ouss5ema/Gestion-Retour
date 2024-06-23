/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoirticketComponent } from './voirticket.component';

describe('VoirticketComponent', () => {
  let component: VoirticketComponent;
  let fixture: ComponentFixture<VoirticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
