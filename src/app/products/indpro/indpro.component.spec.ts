import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndproComponent } from './indpro.component';

describe('IndproComponent', () => {
  let component: IndproComponent;
  let fixture: ComponentFixture<IndproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
