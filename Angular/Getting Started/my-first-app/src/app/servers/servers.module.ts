import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from '../server/server.component';
import { ServersComponent } from './servers.component';

@NgModule({
  declarations: [
    ServerComponent,
    ServersComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    ServersComponent
  ]
})
export class ServersModule { }
