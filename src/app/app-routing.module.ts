import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { ChangeFormComponent } from './src/app/Forms/change-form/change-form.component';
import { AddFormComponent } from './src/app/Forms/add-form/add-form.component';
 
 
const routes: Routes = [
    { path: '', redirectTo: '/Information', pathMatch: 'full' },
    { path: 'Information', component:  InformationComponent},
    { path: 'GoodsList', component:  GoodsListComponent},
    { path: 'ChangeGood', component:  ChangeFormComponent},
    { path: 'addGood', component:  AddFormComponent}
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }
