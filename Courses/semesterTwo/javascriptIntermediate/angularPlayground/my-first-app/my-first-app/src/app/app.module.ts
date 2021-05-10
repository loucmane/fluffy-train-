import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ChildComponent } from './components/child/child.component';
import { PropbindingComponent } from './components/propbinding/propbinding.component';
import { UserInputComponent } from './components/user-input/user-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AnimalsComponent,
    ChildComponent,
    PropbindingComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
