import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  
  @Input() subjectChild:any;
  @Output() private numberGenerated=new EventEmitter<number>();
  constructor(public _maths:MathsService) { }

  ngOnInit(): void {
  }

  increase(){
    this._maths.addone();
  }
public generateNumber(){
  const randomnumber=Math.random();
  this.numberGenerated.emit(randomnumber);
}
}

