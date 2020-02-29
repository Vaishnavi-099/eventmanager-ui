import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { HttpClientModule} from '@angular/common/http';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AddEventComponent } from './components/add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
