import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FileModel } from 'src/app/model/FileModel';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-manipulation',
  templateUrl: './file-manipulation.component.html',
  styleUrls: ['./file-manipulation.component.scss']
})
export class FileManipulationComponent implements OnInit {

  files: FileModel[] = [];

  selectedFile: FileModel = null as any;

  constructor( private fileService: FileService) { }

  ngOnInit(): void {
  }


  async onChange(event: any) {
    let response = this.fileService.postPDF(event.target.files[0]);
    await lastValueFrom(response).then(val => {
      this.files.push(val);
    })
  }

  async onSelectFile(event: any) {
    this.selectedFile = event.value;
    this.fileService.setIsLoadingFile(true);
    let file = this.fileService.getFile(String(this.selectedFile.UID));
    await lastValueFrom(file).then(val => {
      this.fileService.setCurrentFileTexte(String(val.text));
      this.fileService.setIsLoadingFile(false);
    });
  }
}
