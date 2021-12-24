import { Component,                          } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

import { FormComponentBase,     } from '../../../core';
import { AddTodoListRequestDto,
         TodoListService,       } from '../../api';
import { TodoListLinks,
         TodoListNavigator,     } from '../../routing';
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
    private readonly builder: FormBuilder,
    private readonly navigator: TodoListNavigator,

    private readonly links: TodoListLinks,

    service: TodoListService,
  ) {
    super();

    this.presenter = new AddTodoListPresenter(this, service);
  }

  public get todoList(): AddTodoListRequestDto {
    return this.form.value;
  }

  public get backLink(): Array<any> {
    return this.links.searchTodoListsLink();
  }

  public get homeLink(): Array<any> {
    return this.links.searchTodoListsLink();
  }

  public onSubmit(): void {
    this.validateForm();

    if (this.form.valid) {
      this.presenter.add();
      this.navigator.navigateToSearchTodoLists();
    }
  }

  protected buildForm(): FormGroup {
    return this.builder.group({
      'title': this.builder.control('', Validators.required),
      'description': '',
    });
  }
}
