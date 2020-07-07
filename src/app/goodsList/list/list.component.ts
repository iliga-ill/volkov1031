import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { 
  MyGood,
  MyCategory
} from 'src/app/goodsModel.model';
import { GoodsService } from 'src/app/shared/goods.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() title;
  @Input() goods: MyGood[];

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() changeWorker = new EventEmitter<number>();

  constructor(public goodsService:GoodsService,public router: Router) { }

  ngOnInit(): void {
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  async ChangeNumber(Operation,good){
    if (Operation == 1){await this.goodsService.changeGoods(good.number++);}
    if (Operation == 2){await this.goodsService.changeGoods(good.number--);}
  }

  async onChange(good){
    await this.goodsService.set(good);
    this.router.navigate(["/ChangeGood"]);
  }
  

}
