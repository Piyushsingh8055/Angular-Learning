import { Component } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
    `.custom{color:red}`
  ]
})
export class TodosComponent {
todos:Todo[];
constructor() { 
  this.todos=[
  {
    sno: 1,
    title: "This is title 1",
    desc: "Description", 
    active: true
  },
  {
    sno: 2,
    title: "This is title 2",
    desc: "Description", 
    active: true
  },
  {
    sno: 3,
    title: "This is title 3",
    desc: "Description", 
    active: true
  },
  
]
}
ngOnInit():void{
   
}

getname(name:string, sname:string){
  alert(name)
  alert(sname)
}

checkfun(value:string){
  console.warn(value);
}


displayVal="";
getval(value:string){
  console.warn(value);
  this.displayVal=value
}
}

