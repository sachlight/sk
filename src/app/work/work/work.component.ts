import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProjectMaster } from '../project-master';
import { ProjectMasterServiceService } from '../project-master-service.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private projectService:ProjectMasterServiceService, private titleSer:Title,
    private spinner: NgxSpinnerService) { }

  setDocTitle(title: string) {
    // console.log('current title:::::' + this.titleSer.getTitle());
    this.titleSer.setTitle(title);
    
 }
 
  ngOnInit(): void {

AOS.init();
    // console.log("Work Module Load..........");
    this.getProjects();
    this.getAllTechnology();
  }
  
  projects:ProjectMaster | any;

  getProjects(){
    this.spinner.show();

    this.projectService.getProjectMaster().subscribe((res)=>{

      this.projects = res.data;
      this.spinner.hide();  

    
      // console.log(this.projects);
    })
  }

  id:ProjectMaster | any;

  // getTechnology(){
  //   this.projectService.getOneTech(this.id).subscribe(res=>
  //   console.log(res)
  //     )
  // }

  coka:ProjectMaster | any;

  getAllTechnology(){
   this.spinner.show();
    this.projectService.getAllTech().subscribe(res=>{
      this.coka = res.data;
      console.log(this.coka);
     this.spinner.hide();
    })
  }




}
