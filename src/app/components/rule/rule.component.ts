import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rule } from 'src/app/model/Frequenzy';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent {
  @Input() rule:Rule = new Rule; 
  @Output() onChange = new EventEmitter<boolean>();
  isDisabled = false;

  constructor() { }

  onCheck(completed: boolean) {
    this.onChange.emit(true);
  }
}
