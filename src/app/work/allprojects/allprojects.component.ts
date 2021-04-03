import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectMaster } from '../project-master';
import { ProjectMasterServiceService } from '../project-master-service.service';

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.css']
})
export class AllprojectsComponent implements OnInit {

 
  constructor(private projectService:ProjectMasterServiceService, private titleSer:Title) { }

  setDocTitle(title: string) {
    // console.log('current title:::::' + this.titleSer.getTitle());
    this.titleSer.setTitle(title);
    
 }
 
  ngOnInit(): void {
    
    console.log("Work Module Load..........");
    this.getProjects();
    this.getAllTechnology();
  }
  
  projects:ProjectMaster | any;

  getProjects(){
    this.projectService.getProjectMaster().subscribe((res)=>{
      this.projects = res.data;
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
    this.projectService.getAllTech().subscribe(res=>{
      this.coka = res.data;
      console.log(this.coka);
    })
  }


}
