import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { ConfigComponent } from './config/config.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: '',
    component: LogComponent
  },
  {
    path: 'config',
    component: ConfigComponent
  },
  {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    ConfigComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
