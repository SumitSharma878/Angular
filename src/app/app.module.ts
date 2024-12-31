import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomizedstyledirectiveDirective } from './customizedstyledirective.directive';
import { RenderCustomizedstyldirectiveDirective } from './render-customizedstyldirective.directive';
import { MyeventdirectiveDirective } from './myeventdirective.directive';




@NgModule({
  declarations: [
    AppComponent,
    CustomizedstyledirectiveDirective,
    RenderCustomizedstyldirectiveDirective,
    MyeventdirectiveDirective,
   
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
