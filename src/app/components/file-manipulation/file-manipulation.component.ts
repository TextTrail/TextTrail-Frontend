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

  files: FileModel[] = [
    {
      UID: '123',
      name: 'First PDF Ever',
      timeStamp: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)
    },
    {
      UID: '127',
      name: 'One smal step for me',
      timeStamp: new Date(2021, 0O5, 0O1, 1, 23, 42, 11)
    }
  ];

  selectedFile: FileModel = null as any;

  constructor( private fileService: FileService) { }

  ngOnInit(): void {
  }


  async onChange(event: any) {
    //console.log(event);
    let response = this.fileService.postPDF(event.target.files[0]);
    await lastValueFrom(response).then(val => {
      console.log(val);
      this.files.push(val);
    })
  }

  async onSelectFile(event: any) {
    console.log(event);
    this.selectedFile = event.value;
    this.fileService.setIsLoadingFile(true);
    let file = this.fileService.getFile(String(this.selectedFile.UID));
    await lastValueFrom(file).then(val => {
      console.log(val);
      this.fileService.setCurrentFileTexte(String(val.text));
      this.fileService.setIsLoadingFile(false);
    });
  }
}
