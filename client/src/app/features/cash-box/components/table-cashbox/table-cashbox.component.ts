import { Component, OnInit } from '@angular/core';
import { TableCashboxPresenter } from './table-cashbox.presenter';

@Component({
  selector: 'app-table-cashbox',
  templateUrl: './table-cashbox.component.html',
  styleUrls: ['./table-cashbox.component.css'],
  providers: [TableCashboxPresenter]
})
export class TableCashboxComponent implements OnInit {

  buyouts = this.presenter.buyouts$

  constructor(private readonly presenter:TableCashboxPresenter) { }

  ngOnInit(): void {
    this.presenter.run()
  }

}
