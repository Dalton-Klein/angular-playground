import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  count:number = 6;
  currentMessage:string = 'Blank'

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
    this._interactionService.parentMessage$.subscribe(
      message => {
        this.currentMessage=message
      }
    )
  }

  increase(upTdownF:boolean) {
    if (upTdownF) this.count++;
    else this.count--;
  }

  // decrease() {
  //   this.count--;
  // }

}
