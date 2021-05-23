import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() options;
  @Input() initialValue;
  @Output() onItemSelect = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onMenuClick(option){
    this.onItemSelect.emit(option);
  }
}
