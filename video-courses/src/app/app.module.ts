import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
<<<<<<< master
<<<<<<< master
import { ToolsModule } from './tools/tools.module';
import { HttpClientModule } from '@angular/common/http';

=======
>>>>>>> Add Delete popup
=======
import { ToolsModule } from './tools/tools.module';

>>>>>>> Add auth guard for add course and edit course
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ToolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
