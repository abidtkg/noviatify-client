import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdAgentComponent } from './registerd-agent.component';

describe('RegisterdAgentComponent', () => {
  let component: RegisterdAgentComponent;
  let fixture: ComponentFixture<RegisterdAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterdAgentComponent]
    });
    fixture = TestBed.createComponent(RegisterdAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
