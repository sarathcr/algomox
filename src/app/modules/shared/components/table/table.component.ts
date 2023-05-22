import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskResponse } from '../../models/task.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public fGroup!: FormGroup;

  // Input decorators here
  @Input() data: any;

  // Output decorators here
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onCreate = new EventEmitter();
  @Output() onSearch = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  // Onint lifecycle hook, define form instances here
  ngOnInit(): void {
    this.fGroup = this.formBuilder.group({
      search: '',
    });
  }

  // Emit edit event
  public onEditItem(item: TaskResponse) {
    this.onEdit.emit(item);
  }

  // Emit delete event
  public onDeleteItem(item: TaskResponse) {
    this.onDelete.emit(item);
  }

  // Emit create event
  public createTask() {
    this.onCreate.emit();
  }

  // Emit search event
  public onSearchData() {
    const searchData = this.fGroup.getRawValue();
    this.onSearch.emit(searchData.search);
  }
}
