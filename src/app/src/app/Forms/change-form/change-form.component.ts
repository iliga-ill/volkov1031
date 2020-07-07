import { Component, OnInit } from '@angular/core';
import { 
  MyGood,
  MyCategory
} from 'src/app/goodsModel.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoodsService } from 'src/app/shared/goods.service';
import { Router } from '@angular/router';

interface ChangeForm {
  articul: string;
  name: string;
  cost: number;
  producer?: string;
  weight:number;
  number: number;
}

@Component({
  selector: 'app-change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.css']
})
export class ChangeFormComponent implements OnInit {

  good: MyGood[]=[];
  MyCategory: MyCategory;

  Frukt="Мебель"
  Ovosh = "Техника"
  Meat = "Кники"
  Egg = "Телефоны"

  numb=0;

  OpenGood:MyGood;

  ChangeArticul;
  ChangeName;
  ChangeCost;
  CangeProducer;
  CangeCategory;
  CangeWeight;
  CangeNumber;

  Category;

  onChange=false;
  
  ChangeForm: FormGroup;
  users: ChangeForm[]=[];

  constructor(public goodsService:GoodsService,public router: Router) { 
    this.ChangeForm = new FormGroup({
      articul: new FormControl(null,[Validators.required]),
      name: new FormControl(null,[Validators.required]),
      cost: new FormControl(null,[Validators.required]),
      producer: new FormControl(null,[Validators.nullValidator]),
      weight: new FormControl(null,[Validators.required]),
      number: new FormControl(null,[Validators.required]),
    });
    this.OpenGood=this.goodsService.get();
    console.log(this.OpenGood)
    this.getData();
  }


  async getData() {
    try {
      this.good = await this.goodsService.getData();
    } catch (error) {
      console.log(error)
    }
  }

  async onDeleteById(id: number) {
    try {
      await this.goodsService.onDeleteById(id);
      this.getData();
    } catch (error) {
      console.log(error);
    }
    this.router.navigate(["/GoodsList"]);
  }

  async onChangeById(good){
    try {
      await this.goodsService.changeGoods(good);
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {}

  onChangeWorker(){
    this.ChangeArticul=this.OpenGood.articul;
    this.ChangeName=this.OpenGood.name;
    this.ChangeCost=this.OpenGood.cost;
    this.CangeProducer=this.OpenGood.producer;
    this.CangeCategory=this.OpenGood.category;
    this.CangeWeight=this.OpenGood.weight;
    this.CangeNumber=this.OpenGood.number;

    this.onChange=true;
  }

  back(){
    this.onChange=false;
  }

  onSubmitChanges() {
    this.onChange=false;
    let push:MyGood=this.ChangeForm.value;
    push.category=this.CangeCategory;
    push.id=this.OpenGood.id;
    this.onChangeById(push)
    this.OpenGood=push;
    this.ChangeForm.reset(); 
  }

  number(){
    if ((this.ChangeForm.value.number < 0) || this.ChangeForm.invalid){return true}
    else return false
  }

  CheckID(){
    for (let i=0;i<this.good.length;i++){
      if (this.ChangeForm.value.id==this.good[i].id){ if (this.good[i].id!=this.OpenGood.id){return true}}
    }
    return false
  }

}
