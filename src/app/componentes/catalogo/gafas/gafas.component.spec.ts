import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GafasComponent } from './gafas.component';

describe('GafasComponent', () => {
  let component: GafasComponent;
  let fixture: ComponentFixture<GafasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GafasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GafasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
