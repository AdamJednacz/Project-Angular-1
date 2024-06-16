import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCurrenciesComponent } from './saved-currencies.component';

describe('SavedCurrenciesComponent', () => {
  let component: SavedCurrenciesComponent;
  let fixture: ComponentFixture<SavedCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedCurrenciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
