import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-testpasse',
  templateUrl: './testpasse.component.html',
  styleUrls: ['./testpasse.component.css']
})
export class TestpasseComponent implements OnInit {
  @Input()
  testpasse: any;
  constructor() { }

  ngOnInit(): void {
  }

}
