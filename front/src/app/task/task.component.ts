import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';
import { Task } from '../interfaces/task';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AlertComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
    id: number = 0
    title: string = ''
    description: string = ''
    time: number = 0
    difficulty: string = ''
    updatedAt: Date = new Date()
    createdAt: Date = new Date()
    header = ''
    message = ''
    typeAlert = ''
    showAlert = false
    arrDiff = [
      {id:1,
      type:'S'
    }, {id:2,type:'M'},{id:3,type:'L'},{id:3,type:'XL'}]


  constructor(private TaskService : TasksService, private router : Router){}
  task?: Task
  createTask(){
    let task = {
      id: this.id,
      title: this.title ,
      description: this.description,
      time: this.time,
      difficulty: this.difficulty,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt
  }
    this.TaskService.createTask(task).subscribe({
      next: (task:Task | undefined) => {

        if(task != undefined){
          this.showAlert = true
          this.header = 'Success'
          this.message = 'The task was created'
          this.typeAlert = 'success'
        }else{
          this.showAlert = true
          this.header = 'Error'
          this.message = 'Error'
          this.typeAlert = 'danger'
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  
}
