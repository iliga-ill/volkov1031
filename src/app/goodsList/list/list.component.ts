import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { 
  MyGood,
  MyCategory
} from 'src/app/goodsModel.model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
