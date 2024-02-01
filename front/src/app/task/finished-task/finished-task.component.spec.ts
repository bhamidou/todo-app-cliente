import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedTaskComponent } from './finished-task.component';

describe('FinishedTaskComponent', () => {
  let component: FinishedTaskComponent;
  let fixture: ComponentFixture<FinishedTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishedTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinishedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
