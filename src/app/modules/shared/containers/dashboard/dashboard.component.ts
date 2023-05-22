import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { TaskService } from '../../services/task.service';
import { TaskResponse } from '../../models/task.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public showModal=false
  public taskData!:TaskResponse
  public fGroup!:FormGroup
  constructor(private taskService: TaskService, private formBuilder: FormBuilder){}
 ngOnInit(): void {
   this.getTasks()
   this.fGroup = this.formBuilder.group({
    title:  ['', [Validators.required]],
    description:['', [Validators.required, ]],
    dueDate: [new Date(), [Validators.required]]
  })
 
 }
 private getTasks(){
  this.taskService.getTasks().subscribe((res:TaskResponse)=>{this.taskData = res;console.log(this.taskData) }, (err:string)=>console.log(err))
 }
 public onCreateTask(){
  const data = this.fGroup.getRawValue()
  this.taskService.createTasks(data).subscribe((res:TaskResponse)=>{console.log(res);this.showModal = false
  }, (err:string)=>console.log(err))
 
 }

 public onDelete(item:TaskResponse){
 
this.taskService.deleteTasks(item._id).subscribe((res)=> this.getTasks(),(err:string)=> console.log("err",err))
 }

 
}
