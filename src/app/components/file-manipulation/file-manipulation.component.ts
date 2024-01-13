import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/model/File';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-manipulation',
  templateUrl: './file-manipulation.component.html',
  styleUrls: ['./file-manipulation.component.scss']
})
export class FileManipulationComponent implements OnInit {

  files: File[] = [
    {
      id: '123',
      name: 'First PDF Ever',
      timeStamp: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)
    },
    {
      id: '127',
      name: 'One smal step for me',
      timeStamp: new Date(2021, 0O5, 0O1, 1, 23, 42, 11)
    }
  ];

  selectedFile: File = null as any;

  constructor( private fileService: FileService) { }

  ngOnInit(): void {
  }


  onChange(event: any) {
  }

  onSelectFile(event: any) {
    console.log(event);
    this.selectedFile = event.value;
    this.fileService.setIsLoadingFile(true);
    this.fileService.getFileById(String(this.selectedFile.id));
    this.fileService.getCurrentFileText()
    setTimeout(() => {
      this.fileService.setIsLoadingFile(false);
    }, 3000);
  }
}
