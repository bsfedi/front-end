import { Component } from '@angular/core';

import * as Chart from 'node_modules/chart.js/dist/chart.js';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10chartjs';
  canvas:any; ctx:any; canvas2:any; ctx2:any; canvas3:any; ctx3:any;
  constructor(){}
  ngOnInit(){
    $(document).ready(function(){
      $("#hide").click(function(){
        $("p").hide();
      });
      $("#show").click(function(){
        $("p").show();
      });
    });

}}
