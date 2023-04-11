import { Component, Input, OnInit } from '@angular/core';
import { ScryfallService } from '@core/services/scryfall.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
    selector: 'ws-card-image-previewer',
    templateUrl: './card-image-previewer.component.html',
    styleUrls: ['./card-image-previewer.component.scss'],
})
export class CardImagePreviewerComponent implements OnInit {
    @Input() cardName!: string;
    imageUrl$?: Observable<string>;

    constructor(private scryfall: ScryfallService) {}

    ngOnInit(): void {
        this.imageUrl$ = this.scryfall.getCard(this.cardName).pipe(
            take(1),
            map((result) => result.image_uris.normal)
        );
    }
}
