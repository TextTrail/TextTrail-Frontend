import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {

  selectedFile: any;
  img: any;
  fileNames: String[] = [];

  constructor() {
   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onChange(event: any) {
    this.fileNames = [];
    for (let index = 0; index < event.target.files.length; index++) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[index]);
      this.fileNames.push(event.target.files[index].name);
    }
  }
}