import { Component, OnInit } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    // this.spinner.show();

    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 3000);
  }

}
