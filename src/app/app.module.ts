import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { AppRoutingModule } from './app-routing.module';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { ListComponent } from './goodsList/list/list.component';
import { GoodsService } from 'src/app/shared/goods.service';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    GoodsListComponent,
    ListComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
