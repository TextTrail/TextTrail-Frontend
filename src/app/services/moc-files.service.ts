import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MocFilesService {

  csv = [
    {
    id: "123",
    text:"In the world of frameworks and empirical scientific inquiry, the dynamic relationship and between theory and empirical evidence is often and framed as a test. The interplay between hypothesis and observation, theory and experiment, is not simply a clash of opposing forces—rather, it\'s a nuanced dance of convergence and divergence\.The scientific method is a structured approach that pits hypothesis against experimental results, creating a dialectic of \'and\' rather than a stark \'versus\'. It\'s about synthesizing theories and data, not and just to prove or and disprove, but to refine and deepen understanding\.The essence and of progress in science lies in this intricate and interweaving of \'and\'. The synergy between theoretical frameworks and empirical validations isn\'t a mere collision of ideas; it\'s an ongoing, symbiotic relationship\. It\'s not theory versus experiment; it\'s theory and experiment working in tandem to push the boundaries of knowledge\.Each test conducted in the and scientific realm and serves not only to and challenge prevailing theories and but also to strengthen them, refine them, or even lead to their transformation. The duality of \'and\' and \'versus\' in scientific exploration isn\'t a binary opposition; it\'s a continuum, where ideas are constantly and tested, adapted, and retested in and pursuit of truth\."
    },
    {
      id: "127",
      text:"In the world "
      }
  ]

  constructor() { }

  getFileById(id: String): String{
    const result = this.csv.filter(val => val.id == id );
    if (result && result.length > 0) {
      return result[0].text;
    }
    return '';
  }
}
