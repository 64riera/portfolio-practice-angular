import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../../models/project';
import { Global } from '../../../services/global';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public project: any;
  public idProject: string;
  public url: string;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.url = Global.url;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idProject = params.id;
      this.getProject(this.idProject);
    });
  }

  getProject(id: string){
    this.projectService.getProject(id).subscribe(
      res => {
        this.project = res;
        console.log(this.project);
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteProject(id: string){
    this.projectService.deleteProject(id).subscribe(
      res => {
        this.router.navigate(['/proyectos']);
      },  
      err => {
        console.log(err);
      }
    );
  }

}
