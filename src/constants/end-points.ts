export class EndPoints{
    static BASE_URL: string = process.env.BASE_URL!;
    static ARTISTS: string = `${this.BASE_URL}/artists`;
}