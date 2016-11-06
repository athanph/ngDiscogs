import { Release } from './Release';

export class Artist {
    id: number;
    title: string;
    genre: Array<any>;
    releases: Release[];
}