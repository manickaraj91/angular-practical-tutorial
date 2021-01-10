import { Component, OnInit } from '@angular/core';
import { MathsService } from '../services/maths.service';


@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  bookId: number = 101;
  bookName: string = "Thulasi";
  author: string = "Balakumaran";
  bookStatus: string = "Available";
  btnToggle: boolean = true;
  constructor(public _maths:MathsService) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.btnToggle = false;
    }, 2000);
  }
  onToggle(){
      if (this.bookStatus == "Available") 
      {
        this.bookStatus = "Un Available";
      }
      else{this.bookStatus = "Available";}
    }
  
    decrease(){
      this._maths.decreaseone();
    }

}

