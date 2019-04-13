import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EmailComponentModel } from '../../models';

interface EmailComponent {
  id: string;
  template: TemplateRef<any>;
  description?: string;
}

@Component({
  selector: 'app-html-email-editor',
  templateUrl: './html-email-editor.component.html',
  styleUrls: ['./html-email-editor.component.css']
})
export class HtmlEmailEditorComponent implements OnInit {
  header: EmailComponentModel;
  mainMessage = '';
  actionUrl = '';
  selectedComponents: string[] = [];
  values: any = {};

  @ViewChild('doItNow') doItNow: TemplateRef<any>;
  @ViewChild('alreadyFinished') alreadyFinished: TemplateRef<any>;
  @ViewChild('remindIn') remindIn: TemplateRef<any>;
  @ViewChild('editReminders') editReminders: TemplateRef<any>;
  @ViewChild('dontRemindAgain') dontRemindAgain: TemplateRef<any>;
  @ViewChild('closing') closing: TemplateRef<any>;

  templates: EmailComponent[] = [];

  constructor() {}

  ngOnInit() {
    this.templates = [
      {
        id: 'do-it-now',
        template: this.doItNow,
        description:
          '(Providing a way for recipients to go directly to the reminded task can ' +
          'facilitate completion. This link will take them directly to your task/the web address you provide)'
      },
      {
        id: 'already-finished',
        template: this.alreadyFinished,
        description:
          '(This option will opt recipients out for remaining reminders associated with this task. They will not be reminded again)'
      },
      {
        id: 'remind-in',
        template: this.remindIn,
        description:
          '(This link allows recipients to have another reminder sent within a few hours. Kind of like a snooze alarm for your reminder)'
      },
      {
        id: 'editReminders',
        template: this.editReminders,
        description:
          '(If you have a number of reminders associated with your course this link allows recipients to customize all of their reminders)'
      },
      {
        id: 'dontRemindAgain',
        template: this.dontRemindAgain,
        description:
          '(When sending multiple reminders providing recipients a way to opt-out of future reminders is good reminder etiquette)'
      }
    ];
  }

  selectComponent(event: Event, componentId: string): void {
    event.preventDefault();
    if (componentId === 'do-it-now') {
      this.actionUrl = prompt(
        'Enter the location (i.e., web address; e.g., https://learn.uwaterloo.ca/)' +
          ' that you would like students taken when they click the “Do It Now” button.'
      );
      if (this.actionUrl === null || this.actionUrl === '') {
        return;
      }
    }

    this.selectedComponents.push(componentId);
  }

  removeComponent(event: Event, componentId: string): void {
    event.preventDefault();
    if (componentId === 'do-it-now') {
      this.actionUrl = '';
    }
    this.selectedComponents = this.selectedComponents.filter(
      (id: string) => id !== componentId
    );
  }

  onSave(): any {
    const templateIds = this.selectedComponents;
    return {
      templateIds,
      values: {
        mainMessage: this.mainMessage,
        actionUrl: this.actionUrl
      }
    };
  }
}
