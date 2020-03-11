import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: '', redirectTo: '/event',
    pathMatch: 'full' 
  
  },
  { path: 'event', 
  component: EventsComponent
   },
  { path: 'special',
   component: SpecialEventsComponent, 
   canActivate : [AuthGuard]
  },
  { path: 'login', 
  component: LoginComponent
 },
  { path: 'register', component: RegisterComponent },
  { path: "**", component: EventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingConst = [EventsComponent, SpecialEventsComponent, LoginComponent, RegisterComponent, EventsComponent];
