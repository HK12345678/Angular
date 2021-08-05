import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClistComponent } from './clist/clist.component';
import { HlistComponent } from './hlist/hlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ClistComponent,
    HlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'c-list', component: ClistComponent},
      {path: 'heroes-list', component: HlistComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    ]),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
