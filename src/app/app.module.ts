import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRootComponent } from './appRoot.component';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    WidgetsModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
