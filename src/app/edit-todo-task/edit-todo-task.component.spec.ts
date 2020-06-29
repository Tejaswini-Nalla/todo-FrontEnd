import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoTaskComponent } from './edit-todo-task.component';

describe('EditTodoTaskComponent', () => {
  let component: EditTodoTaskComponent;
  let fixture: ComponentFixture<EditTodoTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTodoTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
