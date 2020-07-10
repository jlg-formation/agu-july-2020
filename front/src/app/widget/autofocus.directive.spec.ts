import { AutofocusDirective } from './autofocus.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<input appAutofocus>',
})
export class TestComponent {
}

describe('AutofocusDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, AutofocusDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const compiled = fixture.nativeElement;
    expect(component).toBeTruthy();
    expect(document.activeElement).toBe(compiled.querySelector('input'));
  });
});
