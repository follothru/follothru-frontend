import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CoursesComponent } from '../courses/courses.component';
import { HtmlEmailEditorComponent } from '../html-email-editor/html-email-editor.component';
import { PlainTextEditorComponent } from '../plain-text-editor/plain-text-editor.component';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css']
})
export class EmailEditorComponent implements OnInit {
  currentTab = 'html';
  @ViewChild(HtmlEmailEditorComponent) htmlEditor;
  @ViewChild(PlainTextEditorComponent) plainTextEditor;

  constructor(
    public dialogRef: MatDialogRef<CoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  chooseTab(tab: string): void {
    this.currentTab = tab;
  }

  onSave(): void {
    if (this.currentTab === 'text') {
      this.dialogRef.close(this.plainTextEditor.onSave());
      return;
    }
    this.dialogRef.close(this.htmlEditor.onSave());
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
