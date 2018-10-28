import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Module/CustomMaterial.module';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Cross4tableComponent } from './Component/cross4table/cross4table.component';
import { Cross4itemComponent } from './Component/cross4table/cross4item/cross4item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Cross4tableComponent,
    Cross4itemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
