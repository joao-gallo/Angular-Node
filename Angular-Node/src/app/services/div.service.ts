import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivService {
  private showDiv = true;
  setShowDiv(value: boolean): void {
    this.showDiv = value;
  }

  getShowDiv(): boolean {
    return this.showDiv;
  }
}
