import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers:'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
      {path: 'members/:id', component: MemberDetailsComponent},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
    ]
  },
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
