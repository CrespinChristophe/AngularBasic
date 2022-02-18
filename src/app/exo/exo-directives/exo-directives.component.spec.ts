import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoDirectivesComponent } from './exo-directives.component';

describe('ExoDirectivesComponent', () => {
  let component: ExoDirectivesComponent;
  let fixture: ComponentFixture<ExoDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
