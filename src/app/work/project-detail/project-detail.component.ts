import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Tech } from 'src/app/shared/services/tech';
import { TechnologyService } from 'src/app/shared/services/technology.service';
import { ProjectMaster } from '../project-master';
import { ProjectMasterServiceService } from '../project-master-service.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(
    private projectService:ProjectMasterServiceService,
    private techService:TechnologyService,
     private route:ActivatedRoute,private spinner: NgxSpinnerService,
     public router:Router) { }
  id:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOne();

  }

  projectOne:ProjectMaster | any;

  
getOne(){
  this.spinner.show();
  this.projectService.getOneProject(this.id).subscribe(res=>{
    this.projectOne = res.data;
   this.spinner.hide();
  })
}



}
