import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Whithoutsave2Guard } from '../guards/whithoutsave2.guard';
import { DataResolverService } from '../resolvers/data.resolver.service';
import { ContactReactiveComponent } from './contact-reactive.component';

const routes: Routes = [
  {
    path: '',
    component: ContactReactiveComponent,
    canDeactivate: [Whithoutsave2Guard],
    resolve: { departaments: DataResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactReactiveRoutingModule {}
