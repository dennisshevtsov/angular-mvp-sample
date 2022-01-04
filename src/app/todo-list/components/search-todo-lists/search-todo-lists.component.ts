import { Component, OnInit, ViewChild, } from '@angular/core';
import { ActivatedRoute, ParamMap,     } from '@angular/router';

import { ModalComponent,                   } from '../../../core';
import { SearchTodoListsRecordResponseDto,
         SearchTodoListsRequestDto,
         TodoListService,                  } from '../../api';
import { TodoListLinks,                    } from '../../routing';
import { TodoListTaskLinks,                } from '../../task/routing';
import { SearchTodoListsPresenter,         } from './search-todo-lists.presenter';
import { SearchTodoListsView,              } from './search-todo-lists.view';

@Component({
  templateUrl: './search-todo-lists.component.html',
  styleUrls: [
    './search-todo-lists.component.scss',
  ],
})
export class SearchTodoListsComponent implements OnInit, SearchTodoListsView {
  @ViewChild('modal')
  public modalRef!: ModalComponent;

  private readonly presenter: SearchTodoListsPresenter;

  private selectedValue: SearchTodoListsRecordResponseDto | undefined;
  private queryValue: SearchTodoListsRequestDto | undefined;
  private todoListsValue: SearchTodoListsRecordResponseDto[] | undefined;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly todoListLinks: TodoListLinks,
    private readonly todoListTaskLinks: TodoListTaskLinks,

    service: TodoListService,
  ) {
    this.presenter = new SearchTodoListsPresenter(this, service);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.presenter.search();
    });
  }

  public get selected(): SearchTodoListsRecordResponseDto {
    return this.selectedValue ?? (this.selectedValue = new SearchTodoListsRecordResponseDto(0, '', ''));
  }

  public set selected(selected: SearchTodoListsRecordResponseDto) {
    this.selectedValue = selected;
  }

  public get query(): SearchTodoListsRequestDto {
    return this.queryValue ?? (this.queryValue = new SearchTodoListsRequestDto());
  }

  public set query(query: SearchTodoListsRequestDto) {
    this.queryValue = query;
  }

  public get datasource(): SearchTodoListsRecordResponseDto[] {
    return this.todoListsValue ?? (this.todoListsValue = []);
  }

  public set datasource(datasource: SearchTodoListsRecordResponseDto[]) {
    this.todoListsValue = datasource;
  }

  public get homeLink(): Array<any> {
    return this.todoListLinks.searchTodoListsLink();
  }

  public get addTodoListLink(): Array<any> {
    return this.todoListLinks.addTodoListLink();
  }

  public updateTodoListLink(todoListId: string | number): Array<any> {
    return this.todoListLinks.updateTodoListLink(todoListId);
  }

  public searchTodoListTasksLink(todoListId: string | number): Array<any> {
    return this.todoListTaskLinks.searchTodoListTasksLink(todoListId);
  }

  public onDeleteTodoList(
    todoList: SearchTodoListsRecordResponseDto): void {
    this.selected = { ...todoList, };
    this.modalRef.show();
  }

  public onOkDeleteTodoList(): void {
    this.presenter.delete();
    this.presenter.search();
  }
}
