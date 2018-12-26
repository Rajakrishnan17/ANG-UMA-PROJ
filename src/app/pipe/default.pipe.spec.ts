import { DefaultPipe } from './default.pipe';

describe('DefaultPipe', () => {
   let pipe: DefaultPipe;
  beforeEach(() => {
    pipe = new DefaultPipe();
  });

    it('providing no value returns fallback', () => {
        expect(pipe.transform('', 'http://place-hold.it/300')).toBe('http://place-hold.it/300');
    });

    it('providing a value returns value', () => {
        expect(pipe.transform('http://place-hold.it/301', 'fallback')).toBe('http://place-hold.it/301');
    });

    it('asking for https returns https', () => {
        expect(pipe.transform('', 'http://place-hold.it/300', true)).toBe('https://place-hold.it/300');
    });

    it('return https',()=>{
        expect(pipe.transform('data', 'http://place-hold.it/300', true)).toBe('https://data');
    });

    it('asking for https returns https', () => {
        expect(pipe.transform('http://place-hold.it/301', 'fallback', true)).toBe('https://place-hold.it/301');
    });

    it('asking for https returns https', () => {
        expect(pipe.transform('http://place-hold.it/301', 'fallback', false)).toBe('http://place-hold.it/301');
    });
});

