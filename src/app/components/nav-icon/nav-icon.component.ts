import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-icon',
  templateUrl: './nav-icon.component.html',
  styleUrls: ['./nav-icon.component.scss']
})
export class NavIconComponent implements OnInit {
  @Input() color: string = '#333'; // default color: #333
  @Output() toggled = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
