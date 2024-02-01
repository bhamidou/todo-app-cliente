import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() id = 0
  @Input() email = ''
  @Input() name = ''
  @Input() isAdmin = false

  logout(){
    localStorage.clear()
    location.href='/login'
  }
}
