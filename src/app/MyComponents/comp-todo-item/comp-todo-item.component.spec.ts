import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTodoItemComponent } from './comp-todo-item.component';

describe('CompTodoItemComponent', () => {
  let component: CompTodoItemComponent;
  let fixture: ComponentFixture<CompTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
