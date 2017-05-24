import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'color-picker',
    template: `
    <div class="color-selector">
      <i class="material-icons icon" (click)="showSelector(true)">color_lens</i>
      <div class="selector row center-xs" *ngIf="isSelectorVisible">
        <div class="color" *ngFor="let color of colors" (click)="selectColor(color)" [ngStyle]="{backgroundColor: color}"></div>
      </div>
    </div>
    `,
    styles: [`
        .color-selector {
          position: relative;
        }
        .selector {
          min-width: 120px;
          border: 1px solid lightgrey;
          padding: 10px;
          background-color: #efefef;
          position: absolute;
          top: -50px;
          left: 0;
        }
        .color {
          height: 30px;
          width: 30px;
          border-radius: 100%;
          cursor: pointer;
          margin-right: 10px;
          margin-bottom: 10px;
        }
        .color:hover {
          border: 2px solid darkgrey;
        }
        .icon {
          font-size: 1.4rem;
          color: grey;
          cursor: pointer;
        }
    `]
})

export class ColorPicker {

    @Input() colors: string[] = [];
    @Output() selected = new EventEmitter();
    isSelectorVisible: boolean = false;

    showSelector(value: boolean): void {
        this.isSelectorVisible = value;
    }
    selectColor(color: string){
        this.isSelectorVisible = false;
        this.selected.next(color);
    }

}