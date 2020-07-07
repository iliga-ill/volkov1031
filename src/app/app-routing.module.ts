import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
 
 
const routes: Routes = [
    { path: '', redirectTo: '/Information', pathMatch: 'full' },
    { path: 'Information', component:  InformationComponent},
    { path: 'GoodsList', component:  GoodsListComponent},
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }
