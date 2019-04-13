import { SafeHtml } from '@angular/platform-browser';

export class EmailComponentModel {
  public templateId: string;
  public index: number;
  public safeHtml: SafeHtml;
  constructor(public template: EmailTemplateModel, public html?: string) {
    this.templateId = template.templateId;
    this.index = template.index;
  }
}

export class EmailTemplateModel {
  constructor(
    public templateId: string,
    public index: number,
    public content: string,
    public values?: any
  ) {}

  getHtml(): string {
    const html = this.content;
    return html;
  }

  getComponent(): EmailComponentModel {
    return new EmailComponentModel(this, this.getHtml());
  }
}
