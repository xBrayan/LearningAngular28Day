import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /*{ 
      path:'contact-reactive', 
      component: ContactReactiveComponent, 
      canDeactivate: [Whithoutsave2Guard],
      resolve:{departaments: DataResolverService},
    },*/
  //Ahora igual debo indicarle que esta ruta la sirva desde otro archivo
  {
    path: 'contact-reactive',
    loadChildren: () =>
      import('./contact-reactive/contact-reactive.module').then(
        m => m.ContactReactiveModule
      ),
  },
  { path: 'contact-template/:id', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [PermissionsGuard],
    children: [
      { path: 'list', component: ListComponent },
      { path: 'details', component: DetailsComponent },
    ],
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
