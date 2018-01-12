import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule } from  '@angular/forms';
import { SampleFormComponent } from './sample-form/sample-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleFormComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
