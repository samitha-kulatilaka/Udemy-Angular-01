import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samitha-server',
  templateUrl: './samitha-server.component.html',
  styleUrls: ['./samitha-server.component.css']
})
export class SamithaServerComponent implements OnInit {

  firstName: string = "Samitha";

  constructor() { }

  ngOnInit() {
  }

}