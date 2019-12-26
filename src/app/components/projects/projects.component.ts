import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project'; 
import { Global } from '../../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public projects: any;
  public url: string;

  constructor(
    private projectService: ProjectService
  ) {
    this.url = Global.url;
   }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this.projectService.getProjects().subscribe(
      res => {
        this.projects = res;    
        console.log(this.projects);
      },
      error => {
        console.log(error);
      }
    );
  }

}
