export class Frequenzy {
  text: String = '';
  count: number = 0;
  heatmap: number[] = new Array<number>(20);
}

export class Rule {
  text: String = '';
  isEnabled :boolean = true;
}