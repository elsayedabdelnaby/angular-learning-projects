import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  //@Input() classNames: string; //this is mean when pass a parameter to TableComponent with classNames
  @Input('class') classNames: string; //this is mean when pass a parameter to TableComponent with class
  @Input() headers: any[];
  @Input() data: any[];

  constructor() {
    this.classNames = '';
    this.headers = [];
    this.data = [];
  }

  ngOnInit() {}
}
