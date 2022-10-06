
import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  question;

  @Input()
  selectedAnswer;

  @Output()
  selectAnswer2 = new EventEmitter<any>()

  callParent(id: number) {
    this.selectAnswer2.next(id);
    console.log("eeeeeeeeee"+id)
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.question);
  }

}
