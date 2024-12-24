import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BindingComponent } from './Lecture9/binding/binding.component';
import { FormsModule} from '@angular/forms';
import { DropdownComponent } from './Lecture12/dropdown/dropdown.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BindingComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
