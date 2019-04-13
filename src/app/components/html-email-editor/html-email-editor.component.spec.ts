import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlEmailEditorComponent } from './html-email-editor.component';

describe('HtmlEmailEditorComponent', () => {
  let component: HtmlEmailEditorComponent;
  let fixture: ComponentFixture<HtmlEmailEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlEmailEditorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlEmailEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
