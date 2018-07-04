import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from './events/events.component';
import { ResourcesComponent } from './resources/resources.component';
import { StartComponent } from './start/start.component';
import { ContactComponent } from './contact/contact.component';
import { ListerComponent } from './lister/lister.component';
import { BarebonesComponent } from './barebones/barebones.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent},
  { path: 'members', component: MembersComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'events', component: EventsComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'start', component: StartComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'lister', component:ListerComponent},
  { path: 'barebones', component:BarebonesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
