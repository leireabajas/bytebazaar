import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogooComponent } from './catalogoo.component';

describe('CatalogooComponent', () => {
  let component: CatalogooComponent;
  let fixture: ComponentFixture<CatalogooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogooComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
