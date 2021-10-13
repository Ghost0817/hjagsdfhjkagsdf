import { Attribute, Component, OnInit, Input } from '@angular/core';

type MyButton = 'submit' | 'button';

@Component({
  selector: 'app-b-button',
  templateUrl: './b-button.component.html',
  styleUrls: ['./b-button.component.scss']
})
export class BButtonComponent implements OnInit {

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
