import 'dotenv/config';

export const DB_HOST: string = process.env.DB_HOST!;
export const DB_PORT: number = +process.env.DB_PORT!;
export const DB_USERNAME: string = process.env.DB_USERNAME!;
export const DB_PASSWORD: string = process.env.DB_PASSWORD!;
export const DB_DATABASE: string = process.env.DB_DATABASE!;
export const DB_SYNC: boolean = process.env.DB_SYNC! == 'true';

console.log('DB_SYNC', DB_SYNC);
