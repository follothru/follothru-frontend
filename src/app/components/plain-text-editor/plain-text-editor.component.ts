import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plain-text-editor',
  templateUrl: './plain-text-editor.component.html',
  styleUrls: ['./plain-text-editor.component.css']
})
export class PlainTextEditorComponent implements OnInit {
  mainMessage: string;

  constructor() {}

  ngOnInit() {}

  onSave(): any {
    return { isPlainText: true, mainMessage: this.mainMessage };
  }
}
