
import { EventsPageComponent } from './events/events-page/events-page.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashPageComponent } from './dash/dash-page/dash-page.component';
// import { ResourcePageComponent } from './resources/resources-page/resources-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';

const dashRoutes: Routes = [
  { path: 'blog', component: BlogPageComponent },
  { path: 'events', component: EventsPageComponent },
  // { path: 'resources', component: ResourcePageComponent }
];

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'dash', component: DashPageComponent, children: dashRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
