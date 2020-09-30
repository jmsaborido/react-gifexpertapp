import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

// Fallan porque la api key está en el .env.local

describe('Pruebas en <getGifs />', () => {

    test('debe de traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    })
    test('debe de devolver un array vacio', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})