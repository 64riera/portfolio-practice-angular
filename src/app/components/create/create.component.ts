import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/project';
import { ProjectService } from '../../../services/project.service';
import { UploadService } from '../../../services/upload.service';
import { Global } from '../../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private projectService: ProjectService,
    private uploadService: UploadService
  ) {
    this.title = "Crear proyecto";
    this.project = new Project('', '', '', '', 2019, '', '');
    this.url = Global.url;
   }

  ngOnInit() {
    console.log(this.project);
  }

  onSubmit(myForm){
    this.projectService.saveProject(this.project).subscribe(
      res => {
        this.uploadService.makeFileRequest(this.url + 'upload-image/' + res.project._id, [], this.filesToUpload, 'image' ).then((res) => {
            console.log(res);
        });

        this.status = 'success';
        myForm.reset();
        console.log(res);
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }

  onFileChange(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files
  }

}
