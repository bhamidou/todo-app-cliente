import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaksComponent } from './list-taks.component';

describe('ListTaksComponent', () => {
  let component: ListTaksComponent;
  let fixture: ComponentFixture<ListTaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTaksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
