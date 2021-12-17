import { Component,                            } from '@angular/core';
import { FormBuilder, FormGroup, Validators,   } from '@angular/forms';
import { Router,                               } from '@angular/router';

import { FormComponentBase,     } from '../../../core';
import { AddTodoListRequestDto,
         TodoListService,       } from '../../api';
import { TODO_LIST_ROUTE,       } from '../../routing';
import { AddTodoListPresenter,  } from './add-todo-list.presenter';
import { AddTodoListView,       } from './add-todo-list.view';

@Component({
  templateUrl: './add-todo-list.component.html',
  styleUrls: [
    './add-todo-list.component.scss',
  ],
})
export class AddTodoListComponent
  extends FormComponentBase
  implements AddTodoListView {
  private readonly presenter: AddTodoListPresenter;

  public constructor(
    private readonly router: Router,
    private readonly builder: FormBuilder,

    service: TodoListService,
  ) {
    super();
    this.presenter = new AddTodoListPresenter(this, service);
  }

  public get todoList(): AddTodoListRequestDto {
    return this.form.value;
  }

  public get searchTodoListsLink(): Array<any> {
    return [ '/', TODO_LIST_ROUTE, ];
  }

  public onSubmit(): void {
    this.validateForm();

    if (this.form.valid) {
      this.presenter.add();
      this.router.navigate([ TODO_LIST_ROUTE, ]);
    }
  }

  protected buildForm(): FormGroup {
    return this.builder.group({
      'title': this.builder.control('', Validators.required),
      'description': '',
    });
  }
}
