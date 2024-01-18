import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { MocFilesService } from './moc-files.service';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { FileModel } from '../model/FileModel';
import { PDFResponse } from '../model/PDFResponse';
import config from '../../../config.json';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  isLoadingFile = new BehaviorSubject<Boolean>(false);
  currentFileText = new BehaviorSubject<String>('');

  constructor(private mocFileService: MocFilesService, private httpClient: HttpClient) { }

  getIsLoadingFile(): Boolean {
    return this.isLoadingFile.value;
  }

  setIsLoadingFile(newValue: Boolean) {
    this.isLoadingFile.next(newValue);
  }

  getCurrentFileText() {
    return this.currentFileText.value;
  }

  setCurrentFileTexte(newValue: String) {
    this.currentFileText.next(newValue);
  }

  getFileById(id: String) {
    this.setCurrentFileTexte(this.mocFileService.getFileById(id));
  }

  getFile(UID: string){
    const headers = new HttpHeaders();
    headers.set('Content-Length', '0');

    let result: any;

    return this.httpClient.get<PDFResponse>(config.serverURL, { 
      params: new HttpParams().set('UID', UID) });
  }

  postPDF(file: File) {

    let formParams = new FormData();
    formParams.append('file', file)

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/octet-stream');
    headers.set('Access-Control-Allow-Origin', '*');

    let result: any;

    return this.httpClient.post<FileModel>(config.serverURL, formParams, { headers: headers, params:new HttpParams().set('filename', file.name) });
  }
}
