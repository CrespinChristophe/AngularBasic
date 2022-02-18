import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCommuChildrenComponent } from './demo-commu-children.component';

describe('DemoCommuChildrenComponent', () => {
  let component: DemoCommuChildrenComponent;
  let fixture: ComponentFixture<DemoCommuChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCommuChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCommuChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
