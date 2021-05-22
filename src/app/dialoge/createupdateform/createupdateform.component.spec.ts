import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateupdateformComponent } from './createupdateform.component';

describe('CreateupdateformComponent', () => {
  let component: CreateupdateformComponent;
  let fixture: ComponentFixture<CreateupdateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateupdateformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateupdateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
