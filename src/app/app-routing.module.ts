import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './_errors/test-errors/test-errors.component';
import { NotFoundComponent } from './_errors/not-found/not-found.component';
import { ServerErrorComponent } from './_errors/server-error/server-error.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { preventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { PreventGuard } from './_guards/prevent.guard';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'',
runGuardsAndResolvers:'always',
canActivate:[authGuard],
children:[
   {path:'',component:HomeComponent},
  {path:'members',component:MemberListComponent},
  {path:'members/:username',component:MemberDetailComponent},
  {path:'member/:edit',component:MemberEditComponent,canDeactivate:[PreventGuard]},
  {path:'lists',component:ListsComponent},
  {path:'messages',component:MessagesComponent}
]
},
{path:'errors',component:TestErrorsComponent},
{path:'not-found',component:NotFoundComponent},
{path:'server-error',component:ServerErrorComponent},
  {path:'**',component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
