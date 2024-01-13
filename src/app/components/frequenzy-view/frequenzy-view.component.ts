import { Component, OnInit } from '@angular/core';
import { Frequenzy, Rule } from 'src/app/model/Frequenzy';
import { DialogService } from 'src/app/services/dialog.service';
import { FileService } from 'src/app/services/file.service';
import { RuleService } from 'src/app/services/rule.service';

@Component({
  selector: 'app-frequenzy-view',
  templateUrl: './frequenzy-view.component.html',
  styleUrls: ['./frequenzy-view.component.scss']
})


export class FrequenzyViewComponent implements OnInit {

  currentText: String = '';
  currentRules: Rule[] = [];
  rule = '* and *';
  star = '\w+ and \w+'
  frequencies: Frequenzy[] = []

  isLoading:Boolean = false;

  constructor(private ruleService: RuleService, private dialogService: DialogService, private fileService: FileService) { }

  ngOnInit(): void {
    this.currentRules = this.ruleService.rules.value;
    this.checkRules();

    this.ruleService.rules.subscribe(rules => {
      this.currentRules = rules;
      this.checkRules();
      console.log(this.frequencies);
    });

    this.fileService.isLoadingFile.subscribe(update => {
      this.isLoading = update;
    })

    this.fileService.currentFileText.subscribe(update => {
      this.currentText = update;
      this.checkRules();
    })
  }

  checkRules() {
    this.frequencies = [];
    this.currentRules.forEach(rule => {
      if (rule.isEnabled) {
        this.checkRule(rule.text);
      }
    });
  }

  checkRule(rule: String) {
    let rule_ = rule.replaceAll("*", '\\w+');
    let myMap = new Map<string, Frequenzy>();
    let regexCompiles = this.testRegex(rule_)
    if (regexCompiles) {
      let regex = new RegExp(rule_, 'g')
      let matchResults = Array.from(this.currentText.matchAll(regex))
      matchResults.forEach(match => {
        const result: Frequenzy| undefined = myMap.get(match[0]);
        if (result) {
          result.count = result.count +1;
          result.heatmap = this.compileHeatmap(result.heatmap, Number(match.index), this.currentText.length)
          myMap.set(match[0], result)
        } else {
          let hlp : Frequenzy= new Frequenzy();
          hlp.text = match[0];
          hlp.count = 1;
          hlp.heatmap = this.compileHeatmap(hlp.heatmap, Number(match.index), this.currentText.length)
          myMap.set(match[0], hlp);
        }
      });

      this.convertToFrequecy(myMap);
    }
  }

  testRegex(pattern: string): boolean {
    try {
      new RegExp(pattern);
      return true
    } catch (ex) {
      return false
    }
  }

  convertToFrequecy(result: Map<string, Frequenzy>) {
    result.forEach((value: Frequenzy, key: string) => {
      this.frequencies.push(value);
    });
  }

  compileHeatmap(current: number[], index:number, size:number): number[]{
    const batchSize: number = Math.floor(size/(current.length -1));
    index = Math.floor(index / batchSize);
    const count = current[index];
    if(count > 0){
      current[index] = count +1;
    } else {
      current[index] = 1;
    }
    return current
  }

  uploadDialog(){
    this.dialogService.uploadDialog();
  }
}
