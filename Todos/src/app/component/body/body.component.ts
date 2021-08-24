import { Component, OnInit } from '@angular/core';
import { Todos,Todo } from 'Todo';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
todos:Todo[]=Todos

  constructor() { }

  ngOnInit(): void {
    // this.todos = [
    //   {
    //     // id: 1,
    //     text: 'Study',
    //     // day: 'sunday 8:00 pm',
    //     completed: true,
    //   },
    //   {
    //     // id: 2,
    //     text: 'Codding',
    //     // day: 'monday 1:30 pm',
    //     completed: true,
    //   },
    //   {
    //     // id: 3,
    //     text: 'Eat',
    //     // day: '',
    //     completed: false,
    //   },
    // ];

  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((ele, i) => i !== id);
  }



}
