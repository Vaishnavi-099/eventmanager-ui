import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
eventList: any;
  

  constructor(private httpClient: HttpClient) { }

  ngOnInit()
  {
   this.getEventList();
  }

  getEventList(){
  let url='http://localhost:8080/event/details/list';
  this.httpClient.get(url).subscribe(Response=>{
    this.eventList=Response;

  });

}
}
