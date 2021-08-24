import { Component, OnInit } from '@angular/core';
import { Todos,Todo } from 'Todo';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todos:Todo[]=Todos
  title:string = 'Todo List'
  inputTodo:string=""
  constructor() { }

  ngOnInit(): void {

  }
add(){
this.todos.push({
  text:this.inputTodo,
  completed:false,
})
this.inputTodo=""
}

}
