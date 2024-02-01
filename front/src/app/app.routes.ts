import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import { TaskComponent } from './task/task.component';
import { AllComponent } from './all/all.component';
import { ShowTaskComponent } from './task/show-task/show-task.component';
import { ListTaksComponent } from './task/list-taks/list-taks.component';
import { PendingTasksComponent } from './task/pending-tasks/pending-tasks.component';
import { MyTaskComponent } from './task/my-task/my-task.component';
import { FinishedTaskComponent } from './task/finished-task/finished-task.component';
import { RankingComponent } from './ranking/ranking.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {path: 'home', component: TaskComponent },
  {path: 'my-tasks', component: MyTaskComponent },
  {path: 'task/:id', component: ShowTaskComponent },
  {path: 'pending', component: PendingTasksComponent },
  {path: 'finished', component: FinishedTaskComponent },
  {path: 'ranking', component: RankingComponent},
  {path: 'tasks', component: ListTaksComponent },
  {path: 'all', component: AllComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

];
