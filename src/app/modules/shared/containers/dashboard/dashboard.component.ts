import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TaskResponse } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public taskData!: any;
  private modalRef?: BsModalRef;
  public isEdit: boolean = false;
  public searchResult: TaskResponse;
  public editData!: TaskResponse;

  private subs = new Subscription();

  @ViewChild('createTasksModal') createTasksModal: TemplateRef<any>;

  constructor(
    private taskService: TaskService,
    private modalService: BsModalService
  ) {}

  // Oninit Hook, Define functions to be called on initialize component here
  ngOnInit(): void {
    this.getTasks();
  }

  // Service call to get tasks from DB
  private getTasks() {
    this.subs.add(
      this.taskService.getTasks().subscribe(
        (res: TaskResponse) => {
          this.taskData = res;
        },
        (err: string) => console.log(err)
      )
    );
  }

  // Service call to create tasks
  public createTask(data: TaskResponse) {
    this.subs.add(
      this.taskService.createTasks(data).subscribe(
        (res: TaskResponse) => {
          console.log(res);
          this.hideModal();
          this.getTasks();
        },
        (err: string) => console.log(err)
      )
    );
  }

  // Service call to edit tasks
  public editTask(data: TaskResponse) {
    this.subs.add(
      this.taskService.updateTasks(data, this.editData._id).subscribe(
        (res: TaskResponse) => {
          this.hideModal();
          this.getTasks();
        },
        (err: string) => console.log(err)
      )
    );
  }

  // Service call to open modal
  public openTaskModal() {
    this.modalRef = this.modalService.show(this.createTasksModal, {
      ignoreBackdropClick: false,
      class: 'modal-dialog modal-dialog-centered ',
    });
  }

  // Service call to open modal on edit button click
  public onEditTask(data: TaskResponse) {
    this.isEdit = true;
    this.editData = data;
    if (this.editData) {
      this.openTaskModal();
    }
  }

  // Service call to close modal
  public hideModal() {
    this.modalRef?.hide();
    this.isEdit = false;
  }

  // Service call to Delete task
  public onDelete(item: TaskResponse) {
    this.subs.add(
      this.taskService.deleteTasks(item._id).subscribe(
        (res) => this.getTasks(),
        (err: string) => console.log('err', err)
      )
    );
  }

  // Service call to search task
  public searchTask(searchText: string) {
    this.subs.add(
      this.taskService.searchTasks(searchText).subscribe(
        (res) => {
          this.searchResult = res;
        },
        (err: string) => console.log('err', err)
      )
    );
  }

  // Unsubscribe all subscriptions on component destroy
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
