import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() name='culturals';
  @Input() type='non technical';
  @Input() date='feb 2020';
  @Input() venue='coda';

  constructor() { }

  ngOnInit(){

  }
  

}

