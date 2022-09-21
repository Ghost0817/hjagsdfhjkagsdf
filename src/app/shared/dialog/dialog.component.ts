import { Component, Input, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {

  @Input()
  isClose:boolean = false;
  @Input()
  hasBgLayout:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }

  onOverlayClicked(evt: MouseEvent): void {

  }

  onDialogClicked(evt: MouseEvent): void {
    evt.stopPropagation();
  }

}
