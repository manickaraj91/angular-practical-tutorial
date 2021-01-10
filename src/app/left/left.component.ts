import { Component, OnInit } from '@angular/core';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(public _maths:MathsService) { }

  ngOnInit(): void {
  }
  increase(){
    this._maths.addone();
  }
}

