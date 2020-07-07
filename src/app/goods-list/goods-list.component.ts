import { Component, OnInit } from '@angular/core';
import { GoodsService } from 'src/app/shared/goods.service';
import { 
  MyGood,
  MyCategory
} from 'src/app/goodsModel.model';


@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})

export class GoodsListComponent implements OnInit {

  AllGoods: MyGood []=[];

  constructor(public goods: GoodsService) { 
    console.log("0");
    //this.getData();
  }

  ngOnInit(): void {
  }

  async getData() {
    console.log("1");
    try {
      console.log("2");
      this.AllGoods = await this.goods.getData();
    } catch (error) {
      console.log(error)
    }
  }

  /*
  getByType(type: number) {
    return this.AllGoods.filter((worker) => worker.type === type);
  }*/

  getList(){
    let res=this.AllGoods;
    /*
    if (this.workerType1!=true){res=res.filter((worker) => worker.type != 0);}
    if (this.workerType2!=true){res=res.filter((worker) => worker.type != 1);}
    if (this.workerType3!=true){res=res.filter((worker) => worker.type != 2);}
    if (this.workerType4!=true){res=res.filter((worker) => worker.type != 3);}
    */
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
