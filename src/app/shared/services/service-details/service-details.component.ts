import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Tech } from '../tech';
import { TechnologyService } from '../technology.service';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {



  constructor(private techService:TechnologyService,
      private route:ActivatedRoute, public router:Router,private SpinnerService: NgxSpinnerService) {
   }

  techy:Tech | any;
   id:any;

  ngOnInit(){
console.warn('Services Load..');


    this.id = this.route.snapshot.params.id;
    this.service_name = this.route.snapshot.params.service_name;

    // console.log(this.id);
    this.getData();
    this.getEx();
    this. getProjects();

//     let num = [7, 8, 9];
// num.forEach(function (value) {
//   console.log(value);
// }); 

  }
 

  getData(){
    this.SpinnerService.show();  
    this.techService.getTechnologyDetail(this.id).subscribe(res=>{
      // console.log(res);
     //  this.data = res;
      this.techy =res.data;
      // console.log(this.techy);
      // console.log("oyeeee" + this.techy);
      this.SpinnerService.hide();  
    });
   
 }

 

 

 xprt:Tech | any;

  getEx(){
    this.SpinnerService.show();  
    this.techService.getExpert(this.id).subscribe(res=>{
      // console.log("This is Expertise => " + res.data);
      // this.str=JSON.stringify(res);
      // console.log("with Parse " + this.str);
      
      
     this.xprt = res.data;
    //  console.log(this.xprt);
    //  console.log("Thi sis" +this.xprt);
     this.SpinnerService.hide(); 
    });
    
 
  }

  // proj:Tech[]=[];
roleData:Tech | any;

  // cryptos:any;

  getProjects(){
    this.SpinnerService.show();
    this.techService.getProjectsMini(this.id).subscribe(data=>{
      this.roleData = data.project_data[0]
      this.SpinnerService.hide();
    });
   
 }

 service_name:any;
 
 human(){
    this.id++;
    this.service_name++
    // this.router.navigateByUrl(this.id);
    console.log(this.id);
    console.log(this.service_name);

 }

}
