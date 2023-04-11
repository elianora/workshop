import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImagePreviewerComponent } from './card-image-previewer.component';

describe('CardImagePreviewerComponent', () => {
    let component: CardImagePreviewerComponent;
    let fixture: ComponentFixture<CardImagePreviewerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardImagePreviewerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CardImagePreviewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
