import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartcompanyComponent } from './startcompany.component';

describe('StartcompanyComponent', () => {
  let component: StartcompanyComponent;
  let fixture: ComponentFixture<StartcompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartcompanyComponent]
    });
    fixture = TestBed.createComponent(StartcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
