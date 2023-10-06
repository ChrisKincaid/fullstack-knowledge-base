import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServersModule } from './servers/servers.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
