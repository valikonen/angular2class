import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'note-creator',
    template: `
        <form class="row" [formGroup]="f" (ngSubmit)="onSubmit(f.value)" [ngStyle]="{backgroundColor: color}">
            <input
              type="text"                    
              placeholder="Title"
              class="col-xs-10 title"
              [formControl]="f.controls['title']"
              (keyup)="toggleForm(f.controls['title'])">
    
            <input
              type="text"                   
              placeholder="Take a note..."
              class="col-xs-10"
              [formControl]="f.controls['value']"
              *ngIf="fullForm">

            <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
                <div class="col-xs-3">
                    <color-picker [colors]="colors" (selected)="onColorSelected($event)"></color-picker>
                </div>
              <button
                type="submit"
                class="btn-light">
                Done
              </button>
            </div>
      </form>
    `,
    styles: [`
        .note-creator {
          padding: 20px;
          background-color: white;
          border-radius: 3px;
        }
        .title {
          font-weight: bold;
          color: rgba(0,0,0,0.8);
        }
        .full {
          height: 100px;
        }
    `]
})

export class NoteCreator {

    f: FormGroup;
    fullForm: boolean = false;
    color: string = 'lightgrey'

    @Output() createNoteOut = new EventEmitter();
    colors: string[] = ['#c7254e', '#6c25c7', '#3a51ff', '#09b17c', '#86b109', '#ff7008'];

    constructor(fb: FormBuilder) {
        this.f = fb.group({
            'title': [''],
            'value': ['']
        })
    }

    onSubmit(f: any): void {
        f.color = this.color;
        this.createNoteOut.next(f);   
        this.fullForm = false;     
    }

    toggleForm(input): void {        
        this.fullForm = input.value != '' ? true : false;
    }
    onColorSelected(color: string) {
        this.color = color;
    }
}