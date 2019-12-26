import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/project';
import { ProjectService } from '../../../services/project.service';
import { UploadService } from '../../../services/upload.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from '../../../services/global';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: any;
  public idProject: string;
  public save_project: any;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private projectService: ProjectService,
    private uploadService: UploadService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.title = 'Editar proyecto';
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

}
