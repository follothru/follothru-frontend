import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainTextEditorComponent } from './plain-text-editor.component';

describe('PlainTextEditorComponent', () => {
  let component: PlainTextEditorComponent;
  let fixture: ComponentFixture<PlainTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
