import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featuredSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect (value: string) {
    this.featuredSelected.emit(value);
  }

}
