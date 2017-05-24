import { Component } from '@angular/core';

@Component({
  selector: 'notes',
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNoteOut)="addNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">

          <note-card
            *ngFor="let note of notes; let i = index"
            class="col-xs-4"
            [note]="note"
            (noteOutput)="removeNote(i)">
          </note-card>

        </div>
      </div>
    </div>
    `,
  styles: [`
        .notes {
          padding-top: 50px;
        }
        .creator {
          margin-bottom: 40px; 
        }
    `]
})

export class Notes {
  notes = [
    {
      title: 'Chroes',
      value: 'Don\'t forget to clean up',
      color: 'lightblue'
    },
    {
      title: 'Cook',
      value: 'Cook your food',
      color: 'lightyellow'
    },
    {
      title: 'Doggy',
      value: 'Walk to the dog',
      color: 'lightgreen'
    }
  ];

  removeNote(index){
    this.notes.splice(index, 1);
  }
  addNote(note){
    console.log('note: ', note);
    this.notes.push(note);
  }

}