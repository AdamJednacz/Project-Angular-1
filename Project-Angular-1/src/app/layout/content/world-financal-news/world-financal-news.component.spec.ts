import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldFinancalNewsComponent } from './world-financal-news.component';

describe('WorldFinancalNewsComponent', () => {
  let component: WorldFinancalNewsComponent;
  let fixture: ComponentFixture<WorldFinancalNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldFinancalNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldFinancalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
