/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListeticketComponent } from './listeticket.component';

describe('ListeticketComponent', () => {
  let component: ListeticketComponent;
  let fixture: ComponentFixture<ListeticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
