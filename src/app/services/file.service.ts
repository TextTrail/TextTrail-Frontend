import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MocFilesService } from './moc-files.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  isLoadingFile = new BehaviorSubject<Boolean>(false);
  currentFileText = new BehaviorSubject<String>('');

  constructor(private mocFileService: MocFilesService) { }

  getIsLoadingFile(): Boolean{
    return this.isLoadingFile.value;
  }

  setIsLoadingFile(newValue : Boolean){
    this.isLoadingFile.next(newValue);
  }

  getCurrentFileText(){
    return this.currentFileText.value;
  }

  setCurrentFileTexte(newValue : String){
    this.currentFileText.next(newValue);
  }

  getFileById(id:String){
    this.setCurrentFileTexte(this.mocFileService.getFileById(id));
  }
}
