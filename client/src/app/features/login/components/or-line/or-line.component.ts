import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-or-line',
  templateUrl: './or-line.component.html',
  styleUrls: ['./or-line.component.css']
})
export class OrLineComponent implements OnInit {

  @Input()
  @HostBinding('class')
  lineStyle = "";
  @Input() @HostBinding('class') letter = "";

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
