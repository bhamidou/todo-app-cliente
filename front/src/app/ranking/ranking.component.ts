import { Component } from '@angular/core';
import { RankingService } from '../services/ranking.service';
import { Router } from '@angular/router';
import {  PercentPipe } from '@angular/common';


@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [PercentPipe],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {
  topPending:any = []
  title = ''
  show = ''

  ngOnInit(): void {
      this.getPending()
  }
  constructor(private rankingService : RankingService, private router : Router){}

  getPending():Array<any|undefined>{
    this.show = 'pending' 
    let rtnTask:any = []
    this.rankingService.getPending().subscribe({
      next: (pending:any | undefined) => {
        console.log(pending)
        this.topPending = pending.msg
        this.title = 'Top Usuarios con tareas pendientes'
      },
      error: (err) => {
        console.log(err)
      }
    })
    return rtnTask
  }

  getBest():Array<any|undefined>{
    this.show = 'best' 

    let rtnTask:any = []
    this.rankingService.getBest().subscribe({
      next: (pending:any | undefined) => {
        console.log(pending)
        this.topPending = pending
        this.title = 'Top mejores programadores'
      },
      error: (err) => {
        console.log(err)
      }
    })
    return rtnTask
  }

  getFinish():Array<any|undefined>{
    this.show = 'finish' 
    let rtnTask:any = []
    this.rankingService.getFinish().subscribe({
      next: (pending:any | undefined) => {
        console.log(pending)
        this.topPending = pending.msg
        this.title = 'Top Usuarios que terminan las tareas'
      },
      error: (err) => {
        console.log(err)
      }
    })
    return rtnTask
  }


}
