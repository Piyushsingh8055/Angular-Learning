import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  title= "Counter With angular";
  count=0
  counter(type:string){
    type==='add'?this.count++:this.count--;
  }

 name='Piyush'

disable=false
show=true
color='green'

}
