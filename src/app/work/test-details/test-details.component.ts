import { Component, OnInit } from '@angular/core';
import { ProjectMaster } from '../project-master';
import { ProjectMasterServiceService } from '../project-master-service.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {

  constructor(private projectService:ProjectMasterServiceService) { }

  ngOnInit(): void {

  }

  Joyee:ProjectMaster | any;

  getVirtual(){
    this.projectService.getProjectMaster().subscribe(res=>{
      this.Joyee = res.data;
      
    })
  }

}
