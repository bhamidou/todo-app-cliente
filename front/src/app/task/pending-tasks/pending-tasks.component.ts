import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router, RouterLink } from '@angular/router';
import { Task } from '../../interfaces/task';
import { UserTask } from '../../interfaces/user-task';
import { AlertComponent } from '../../alert/alert.component';

@Component({
  selector: 'app-pending-tasks',
  standalone: true,
  imports: [RouterLink, AlertComponent],
  templateUrl: './pending-tasks.component.html',
  styleUrl: './pending-tasks.component.css'
})
export class PendingTasksComponent implements OnInit {
  arrIds:any = []
  getTasks:any = []
  createInput = false
  showAlert = false
  header = ''
  message = ''
  typeAlert = ''
  constructor(private taskService : TasksService, private router : Router){}

  ngOnInit(): void {
    this.getTasks = this.getAll()
}
  task?: Task
  getAll():Array<UserTask|undefined>{
    let rtnTask:any = []
    this.taskService.getPending().subscribe({
      next: (UserTask:any | undefined) => {
        console.log(UserTask)
        this.getTasks = UserTask
        
      },
      error: (err) => {
        console.log(err)
      }
    })
    return rtnTask
  }

  addId(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target && target.checked !== undefined) {
      const isChecked: boolean = target.checked;
      if (isChecked) {
        this.arrIds.push(target.id);
      } else {
        let i = 0;
        while (i < this.arrIds.length) {
          if (this.arrIds[i] == target.id) {
            if (parseInt(target.id) <= 1) {
              this.arrIds.splice(i, 1);
            } else {
              this.arrIds.splice(i, 1);
            }
          }
          i++;
        }
      }
    }
    if(this.arrIds.length>=1){
      this.createInput = true
    }else{
      this.createInput = false

    }
  }

  asignMe(){
    let rtnTask:any = []

    this.arrIds.forEach((element: any) => {
      let id = {
        id: element
      }
      this.taskService.asignMe(id).subscribe({
        next: (UserTask:any | undefined) => {
          console.log(UserTask)
          this.showAlert = true
          this.header = 'Success'
          this.message = 'the task has been assigned correctly'
          this.typeAlert = 'success'
        },
        error: (err) => {
          console.log(err)
        }
      })
    });
  }

}
