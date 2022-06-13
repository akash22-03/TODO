import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTodoComponent } from './comp-todo.component';

describe('CompTodoComponent', () => {
  let component: CompTodoComponent;
  let fixture: ComponentFixture<CompTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
