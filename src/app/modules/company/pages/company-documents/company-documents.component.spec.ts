import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDocumentsComponent } from './company-documents.component';

describe('CompanyDocumentsComponent', () => {
  let component: CompanyDocumentsComponent;
  let fixture: ComponentFixture<CompanyDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDocumentsComponent]
    });
    fixture = TestBed.createComponent(CompanyDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
