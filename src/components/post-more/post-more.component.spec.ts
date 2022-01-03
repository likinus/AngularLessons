import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMoreComponent } from './post-more.component';

describe('PostMoreComponent', () => {
  let component: PostMoreComponent;
  let fixture: ComponentFixture<PostMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
