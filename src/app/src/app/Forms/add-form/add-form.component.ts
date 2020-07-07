import { Component, OnInit } from '@angular/core';
import { MyCategory, MyGood } from 'src/app/goodsModel.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoodsService } from 'src/app/shared/goods.service';
import { Router } from '@angular/router';

interface ChangeForm {
  name: string;
  cost: number;
  producer:string;
  weight:number;
  number: number;
  articul?: string;
}


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  myWorkerCategory = MyCategory;
  
  Goods: MyGood []=[];

  category = "Мебель";

  Frukt="Мебель"
  Ovosh = "Техника"
  Meat = "Книги"
  Egg = "Телефоны"

  

  ChangeForm: FormGroup;

  constructor(public goodService: GoodsService,public router: Router) {
    this.ChangeForm = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    cost: new FormControl(null,[Validators.required]),
    producer: new FormControl(null,[Validators.required]),
    weight: new FormControl(null,[Validators.required]),
    number: new FormControl(null,[Validators.required]),
    articul: new FormControl(null,[Validators.required]),
  }); 
  this.getData();
  }

  ngOnInit(): void {}

  onAddWorker() {
      let push=this.ChangeForm.value;
      push.category=this.category;
      this.addWorker(push);
      this.ChangeForm.reset();
      this.router.navigate(["/GoodsList"]);
  }


  async addWorker(good) {
    let id =
      this.Goods.length > 0
        ? this.Goods[this.Goods.length - 1].id + 1
        : 0;
        good.id = id;
    try {
      await this.goodService.onAddWorker(good);
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  async getData() {
    try {
      this.Goods = await this.goodService.getData();
    } catch (error) {
      console.log(error)
    }
  }

  number(){
    if ((this.ChangeForm.value.number < 0) || this.ChangeForm.invalid){return true}
    else return false
  }

}
