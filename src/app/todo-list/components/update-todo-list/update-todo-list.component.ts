import { Component, OnInit,                  } from '@angular/core';
import { ActivatedRoute, ParamMap, Router,   } from '@angular/router';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

import { FormComponentBase,        } from '../../../core';
import { TodoListService,
         UpdateTodoListRequestDto, } from '../../api';
import { TodoListLinks, TODO_LIST_PARAMETER,
         TODO_LIST_ROUTE,          } from '../../routing';
import { UpdateTodoListView,       } from './update-todo-list.view';
import { UpdateTodoListPresenter,  } from './update-todo-list.presenter';

@Component({
  templateUrl: './update-todo-list.component.html',
  styleUrls: [
    './update-todo-list.component.scss',
  ],
})
export class UpdateTodoListComponent
  extends FormComponentBase
  implements OnInit, UpdateTodoListView {
  private readonly presenter: UpdateTodoListPresenter;

  private todoListIdValue: number | undefined;

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly builder: FormBuilder,

    public readonly links: TodoListLinks,

    service: TodoListService,
  ) {
    super();

    this.presenter = new UpdateTodoListPresenter(this, service);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId = paramMap.get(TODO_LIST_PARAMETER);

      if (todoListId) {
        this.todoListIdValue = +todoListId;
        this.presenter.load();
      }
    });
  }

  public get todoList(): UpdateTodoListRequestDto {
    return new UpdateTodoListRequestDto(
      this.todoListIdValue,
      this.form.value.title,
      this.form.value.description,
    );
  }

  public set todoList(todoList: UpdateTodoListRequestDto) {
    this.form.setValue({
      'title': todoList.title,
      'description': todoList.description,
    });
  }

  public onSubmit(): void {
    this.validateForm();

    if (this.form.valid) {
      this.presenter.update();
      this.router.navigate(this.links.searchTodoListsLink());
    }
  }

  protected buildForm() : FormGroup {
    return this.builder.group({
      'title': this.builder.control('', Validators.required),
      'description': '',
    });
  }
}
