export interface ScryfallCard {
    image_uris?: {
        small: string;
        normal: string;
        large: string;
        png: string;
        art_crop: string;
        border_crop: string;
    },
    [idx: string]: any;
}
