import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
  randomNumber:number=0;
  subjectParent:object=[
    {id:1,name:'Tamil'},
    {id:2,name:'English'},
    {id:3,name:'maths'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public onNumberGenerated(randomNumber:number){
    this.randomNumber=randomNumber;

  }
}
