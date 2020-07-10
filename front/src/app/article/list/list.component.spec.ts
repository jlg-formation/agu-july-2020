import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetModule } from 'src/app/widget/widget.module';

import { ListComponent } from './list.component';
import { a1 } from 'src/app/mock/TestData';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WidgetModule],
      declarations: [ListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test toggle', () => {
    component.selectedArticles = [];
    component.toggle(a1);
    expect(component).toBeTruthy();
  });

  it('should test toggle - remove', () => {
    component.selectedArticles = [a1];
    component.toggle(a1);
    expect(component).toBeTruthy();
  });
  it('should test remove', () => {
    component.selectedArticles = [a1];
    component.remove();
    expect(component).toBeTruthy();
  });
});
