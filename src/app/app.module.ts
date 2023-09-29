import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { PricingComponent } from './components/card/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuComponent,
    HomeComponent,
    CardLabelComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
