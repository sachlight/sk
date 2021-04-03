import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnologyService } from 'src/app/shared/services/technology.service';
import { ProjectMaster } from '../../project-master';
import { ProjectMasterServiceService } from '../../project-master-service.service';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrls: ['./project-filter.component.css']
})
export class ProjectFilterComponent implements OnInit {

  constructor(private projectService:ProjectMasterServiceService,
    private techService:TechnologyService,
     private route:ActivatedRoute,
     public router:Router) { }
     id:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOneTechno();

  }
  projectOne:ProjectMaster | any;

  getOneTechno(){
    this.projectService.getOneTechnology(this.id).subscribe(res=>{
      
      this.projectOne = res.project_data[0];
      console.log(this.projectOne);
     
    })
  }

}
