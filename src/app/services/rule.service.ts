import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Rule } from '../model/Frequenzy';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  rules = new BehaviorSubject<(Rule[])>([]);

  constructor() { }
}
