import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { MembersComponent } from './members/members.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from './events/events.component';
import { StartComponent } from './start/start.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    MembersComponent,
    ProjectsComponent,
    EventsComponent,
    StartComponent,
    ContactComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
