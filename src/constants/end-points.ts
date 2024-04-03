export class EndPoints{
    static BASE_URL: string = process.env.BASE_URL!;
    static ARTISTS: string = `${this.BASE_URL}/artists`;
    static ALBUMS: string = `${this.BASE_URL}/albums`;
    static SONGS: string = `${this.BASE_URL}/songs`;
}