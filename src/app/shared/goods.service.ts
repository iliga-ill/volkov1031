import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyGood} from 'src/app/goodsModel.model';

@Injectable({
  providedIn: 'root'
})

export class GoodsService {

  onGoods: MyGood;
  

  path="http://localhost:3000/Goods";

  constructor(public http: HttpClient) {}

  getData(): Promise<any> {
    console.log(this.http.get(this.path).toPromise());
    return this.http.get(this.path).toPromise();
  }

  onAddWorker(data) {
    return this.http.post(this.path, data).toPromise();
  }

  onDeleteById(id: number) {
    const url = `${this.path}/${id}`; 
    return this.http.delete(url).toPromise()
  }

  changeGoods(goods){
    const url = `${this.path}/${goods.id}`;
    return this.http.put(url, goods).toPromise()
  }

  set(goods){
    this.onGoods=goods;
  }

  get(){
    return this.onGoods;
  }

}
