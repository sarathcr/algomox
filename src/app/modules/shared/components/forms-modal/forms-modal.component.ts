import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskResponse } from '../../models/task.model';

@Component({
  selector: 'app-forms-modal',
  templateUrl: './forms-modal.component.html',
  styleUrls: ['./forms-modal.component.scss'],
})
export class FormsModalComponent implements OnInit {
  public fGroup!: FormGroup;

  // Input decorators here
  @Input() isEdit: boolean;
  @Input() data: TaskResponse;

  // Output decorators here
  @Output() createTask = new EventEmitter();
  @Output() editTask = new EventEmitter();
  @Output() onClose = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  // Oninit Lifecycle Hook , Define form instances here
  ngOnInit(): void {
    this.fGroup = this.formBuilder.group({
      title: [this.isEdit ? this.data.title : '', [Validators.required]],
      description: [
        this.isEdit ? this.data.description : '',
        [Validators.required],
      ],
      dueDate: [
        this.isEdit ? this.data.dueDate : new Date(),
        [Validators.required],
      ],
    });
  }

  //Public FN to emit create task data to parent
  public onCreateTask() {
    const data = this.fGroup.getRawValue();
    this.createTask.emit(data);
  }

  //Public FN to emit edit task data to parent
  public onEditTask() {
    const data = this.fGroup.getRawValue();
    this.editTask.emit(data);
  }

  //Public FN to emit modal close event to parent
  public closeModal() {
    this.onClose.emit();
  }
}
