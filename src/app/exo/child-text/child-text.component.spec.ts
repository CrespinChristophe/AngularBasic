import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTextComponent } from './child-text.component';

describe('ChildTextComponent', () => {
  let component: ChildTextComponent;
  let fixture: ComponentFixture<ChildTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
