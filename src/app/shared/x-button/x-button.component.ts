import { Attribute, Component, OnInit } from '@angular/core';

type MyButton = 'submit' | 'button';

@Component({
  selector: 'x-button',
  templateUrl: './x-button.component.html',
  styleUrls: ['./x-button.component.scss']
})
export class XButtonComponent implements OnInit {

  constructor(
    @Attribute('type') public type: MyButton,
    @Attribute('text') public text: String,
    //@Attribute('type') public type: MyButton,
  ) {
    console.log(text);
    console.log((text == '' || text == null));
    if (text === '' || text === null) {
      text = 'Button';
    }
   }

  ngOnInit(): void {
  }

}
