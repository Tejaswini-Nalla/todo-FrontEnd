import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoTaskComponent } from './create-todo-task.component';

describe('CreateTodoTaskComponent', () => {
  let component: CreateTodoTaskComponent;
  let fixture: ComponentFixture<CreateTodoTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTodoTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
