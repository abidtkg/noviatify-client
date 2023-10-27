import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainEmailComponent } from './domain-email.component';

describe('DomainEmailComponent', () => {
  let component: DomainEmailComponent;
  let fixture: ComponentFixture<DomainEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomainEmailComponent]
    });
    fixture = TestBed.createComponent(DomainEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
