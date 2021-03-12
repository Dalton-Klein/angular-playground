import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() count:number;
  @Output() increaseEvent = new EventEmitter();
  @Output() decreaseEvent = new EventEmitter();

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
  }
  callParentIncrease() {
    this.increaseEvent.emit(true);
    
  }
  callParentDecrease() {
    this.decreaseEvent.emit(false);
  }

  greetParent() {
    this._interactionService.sendMessage('Good morning');
  }
  appreciateParent() {
    this._interactionService.sendMessage('Well done!');
  }

}
