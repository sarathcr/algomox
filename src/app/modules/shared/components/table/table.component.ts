import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskData, TaskResponse } from '../../models/task.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
@Input() data:any;
@Output() onEdit = new EventEmitter();
@Output() onDelete = new EventEmitter();

public onEditItem(item:TaskResponse){
  console.log(item)
  this.onEdit.emit(item)

}
public onDeleteItem(item:TaskResponse){
  console.log(item)
  this.onDelete.emit(item)

}
}
