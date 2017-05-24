import { Component } from '@angular/core';
import { NoteService } from '../services';

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
            *ngFor="let note of notes"
            class="col-xs-4"
            [note]="note"
            (noteOutput)="removeNote($event)">
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
  notes = [];

  constructor(private noteService: NoteService){
    this.noteService.getNotes()
      .subscribe(res => {
        this.notes = res;
      });
  }

  onCreateNote(note){
    this.noteService.createNote(note)
      .subscribe(note => this.notes.push(note));
  }

  removeNote(note){
    this.noteService.completeNote(note)
      .subscribe( note => {
        const index = this.notes.map(function(item){
          return item.id;
        }).indexOf(note.id);
        
        this.notes.splice(index, 1);
        
      });
  }
  addNote(note){
    
    this.notes.push(note);
  }



}