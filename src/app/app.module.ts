import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { AppRoutingModule } from './app-routing.module';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { ListComponent } from './goodsList/list/list.component';
import { GoodsService } from 'src/app/shared/goods.service';
import { HttpClientModule } from '@angular/common/http';
import { ChangeFormComponent } from './src/app/Forms/change-form/change-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFormComponent } from './src/app/Forms/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    GoodsListComponent,
    ListComponent,
    ChangeFormComponent,
    AddFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
