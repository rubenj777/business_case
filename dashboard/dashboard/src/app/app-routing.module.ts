import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { GeneralComponent } from './general/general.component';

const routes: Routes = [
  { path: '', component: ConnectionComponent },
  { path: 'general', component: GeneralComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
