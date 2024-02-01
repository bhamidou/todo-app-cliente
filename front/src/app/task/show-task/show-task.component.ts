import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AlertComponent } from '../../alert/alert.component';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AlertComponent, TitleCasePipe,UpperCasePipe,DatePipe],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit{
  task?: Task 
  id: number = 0
  title: string = ''
  description: string = ''
  time: number = 0
  difficulty: string = ''
  updatedAt: Date = new Date()
  createdAt: any = ''
  status: number = 0
  showAlert = false
  header = ''
  message = ''
  typeAlert = ''

  arrDiff = [
    {id:1,
    type:'S'
  }, {id:2,type:'M'},{id:3,type:'L'},{id:3,type:'XL'}]

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id']
    this.showTask()
  }

  valueBar = 50;
  inputValueBar = 0

  onInputChange(event: Event) {
     const target = event.target as HTMLInputElement;
     this.valueBar = parseInt(target.value);
      this.inputValueBar=this.valueBar
  }

  onInput(event: Event){
    const target = event.target as HTMLInputElement;
    if(parseInt(target.value)>100){
     this.inputValueBar = 100
     this.valueBar=this.inputValueBar
    }else{
      this.inputValueBar = parseInt(target.value);
      this.valueBar=this.inputValueBar
    }
  }

  constructor(private router : Router,private rutaActiva: ActivatedRoute, private service:TasksService, private datePipe: DatePipe){
  }
  
  showTask(){
    let rtnTask:any = []
    this.service.getTask(this.id).subscribe({
      next: (task:any | undefined) => {
        console.log(task)
        this.title = task.title
        this.description = task.description
        this.difficulty = task.difficulty
        this.time = task.time
        this.status = task.status
        this.createdAt = this.datePipe.transform(task.createdAt, "yyyy-MM-dd HH:mm:ss")
        this.valueBar = task.progress
        this.inputValueBar = task.progress
        
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  updateTask(){
    let task:Task = {
      title: this.title, 
      description: this.description,
      difficulty: this.difficulty,
      time: this.time, 
      createdAt: this.createdAt,
      progress: this.valueBar
    }
    this.service.updateTask(this.id, task).subscribe({
      next: (task:any | undefined) => {
        console.log(task)
          this.showAlert = true
          this.header = 'Success'
          this.message = 'The task was updated'
          this.typeAlert = 'success'

      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  finishTask(){
    this.service.finishTask({todoId:this.id}).subscribe({
      next: (task:any | undefined) => {
        console.log(task)
        this.status = 2
        this.showAlert = true
        this.header = 'Success'
        this.message = 'The task was finishing'
        this.typeAlert = 'success'
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  activateTask(){
    this.service.updateTask(this.id,{status:1}).subscribe({
      next: (task:any | undefined) => {
        console.log(task)
        this.showAlert = true
        this.header = 'Success'
        this.message = 'The task was activated'
        this.typeAlert = 'success'
        this.status = 1

      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
