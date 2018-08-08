import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { Error403Component } from './pages/error403/error403.component';

@NgModule({
  declarations: [
    AppComponent,
    Error403Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
