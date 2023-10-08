import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from '../server/server.component';
import { ServersComponent } from './servers.component';

@NgModule({
  declarations: [
    ServerComponent,
    ServersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ServersComponent
  ]
})
export class ServersModule { }
