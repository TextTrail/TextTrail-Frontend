import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Rule } from 'src/app/model/Frequenzy';
import { RuleService } from 'src/app/services/rule.service';

@Component({
  selector: 'app-rules-view',
  templateUrl: './rules-view.component.html',
  styleUrls: ['./rules-view.component.scss']
})
export class RulesViewComponent implements OnInit {

  predefindeRules: Rule[] = [
    { text: '* and *', isEnabled: true },
    { text: '* versus *', isEnabled: true },
    { text: '* www *', isEnabled: true },
    { text: '* not *', isEnabled: true },
  ]
  rules: Rule[] = [];
  customRules: Rule[] = [];

  rule :Rule = {
    text: '',
    isEnabled: true
  };

  constructor(private ruleService: RuleService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.onChange();
  }

  onChange() {
    this.rules = this.predefindeRules.concat(this.customRules);
    this.ruleService.rules.next(this.rules);
  }

  add(){

    if(!this.rule.text || this.rule.text.length < 1){
      this.snackBar.open("Check your rule","OK");
      setTimeout( () => { this.snackBar.dismiss() }, 2000 );
      return
    }

    this.customRules.push(this.rule);
    this.onChange()
    this.rule = {
      text: '',
      isEnabled: true
    } 
  }
}
