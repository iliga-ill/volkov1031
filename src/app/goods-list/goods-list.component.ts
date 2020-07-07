import { Component, OnInit } from '@angular/core';
import { GoodsService } from 'src/app/shared/goods.service';
import { 
  MyGood,
  MyCategory
} from 'src/app/goodsModel.model';

interface searchStr {
  number: string;
    cost: string;
  }


@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})

export class GoodsListComponent implements OnInit {

  workerType1=true;
  workerType2=true;
  workerType3=true;
  workerType4=true;
  workerType5=true;
  workerType6=1;
  workerType7=1;

  AllGoods: MyGood []=[];

  constructor(public goods: GoodsService) { 
    this.getData();
  }

  ngOnInit(): void {
  }

  async getData() {
    try {
      this.AllGoods = await this.goods.getData();
    } catch (error) {
      console.log(error)
    }
  }


  onButton(id){
    if      (id==1){this.workerType1=!this.workerType1}
    else if (id==2){this.workerType2=!this.workerType2}
    else if (id==3){this.workerType3=!this.workerType3}
    else if (id==4){this.workerType4=!this.workerType4}
    else if (id==5){this.workerType5=!this.workerType5}
    else if (id==6){
      if (this.workerType6<2){this.workerType6=2}
      else {this.workerType6=1}
      this.workerType7=0;}
    else if (id==7){
      if (this.workerType7<2){this.workerType7=2}
      else {this.workerType7=1}
      this.workerType6=0;}
  }

  ButtonController(id){
    if      (id==1){return this.workerType1}
    else if (id==2){return this.workerType2}
    else if (id==3){return this.workerType3}
    else if (id==4){return this.workerType4}
    else if (id==5){return this.workerType5}
    else if (id==6){return this.workerType6}
    else if (id==7){return this.workerType7}
  }

  
  /*
  getByType(type: number) {
    return this.AllGoods.filter((worker) => worker.type === type);
  }*/

  getList(){
    let res=this.AllGoods;
    if (this.workerType1!=true){res=res.filter((worker) => worker.category != "Мебель");}
    if (this.workerType2!=true){res=res.filter((worker) => worker.category != "Техника");}
    if (this.workerType3!=true){res=res.filter((worker) => worker.category != "Книги");}
    if (this.workerType4!=true){res=res.filter((worker) => worker.category != "Телефоны");}
    if (this.workerType5!=true){res=res.filter((worker) => worker.number != 0 );}

    if (this.workerType6==1){res=res.sort(function(a,b){return b.cost - a.cost})}
    else if (this.workerType6==2) {res=res.sort(function(a,b){return a.cost - b.cost})}

    if (this.workerType7==1){res=res.sort(function(a,b){return b.number - a.number})}
    else if (this.workerType7==2) {res=res.sort(function(a,b){return a.number - b.number})}

    return res;
  }

  async onDeleteById(id: number) {
    try {
      await this.goods.onDeleteById(id);
      this.getData();
    } catch (error) {
      console.log(error);
    }
    
  }

  async onChangeById(worker){
    try {
      await this.goods.changeGoods(worker);
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  async onAddGoods(worker) {
    let id =
      this.AllGoods.length > 0
        ? this.AllGoods[this.AllGoods.length - 1].id + 1
        : 0;
    worker.id = id;
    try {
      await this.goods.onAddWorker(worker);
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }





}
