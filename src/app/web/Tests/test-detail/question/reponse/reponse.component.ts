import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {

  // @Input() allows a parent component to update data in the child component.
  @Input() 
  reponse: any;
  
  @Input()
  index: number;

  @Input()
  selectedAnswer: number;
  
  // @Output() allows the child to send data to a parent component.
  //@Output() must have the type of EventEmitter
  @Output()
  selectAnswer = new EventEmitter<any>();
  //new EventEmitter<any>()—tells Angular to create a new event emitter and that the data it emits is of type any.
  
  rep: number;

  isSelected() {
    return this.selectedAnswer == this.reponse.id;
  }

  getidreponse(id: number) {
    this.selectAnswer.emit(id);
    console.log("eee"+id)  }
  constructor() { }

  ngOnInit(): void {
    //console.log(this.reponse)
    this.rep = this.index+1;
    }

}
