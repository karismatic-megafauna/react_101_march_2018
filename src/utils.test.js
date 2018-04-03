import { turnObjectIntoArray } from './utils';

describe('turnObjectIntoArray', () => {
  it('turns an object with nested objects into an array of objects', () => {
    const nestedObject = {
      'actor 1' : {
        name: 'Sir Patrick Stewart',
        movies: [
          'Star Trek Generations',
          'X-Men',
          'Dune',
          'Nausicaä of the Valley of the Wind',
        ],
      },
      'actor 2' : {
        name: 'Sir Ian Murray McKellen',
        movies: [
          'X-Men',
          'Lord of the Rings',
          'Gods and Monsters',
        ],
      },
      'actor 3' : {
        name: 'Sir Daniel Michael Blake Day-Lewis',
        movies: [
          'Gangs of New York',
          'There Will Be Blood',
          'Phantom Thread',
          'The last of the Mohicans',
        ],
      },
    }

    const arrayOfObjects = [
      {
        name: 'Sir Patrick Stewart',
        movies: [
          'Star Trek Generations',
          'X-Men',
          'Dune',
          'Nausicaä of the Valley of the Wind',
        ],
      },
      {
        name: 'Sir Ian Murray McKellen',
        movies: [
          'X-Men',
          'Lord of the Rings',
          'Gods and Monsters',
        ],
      },
      {
        name: 'Sir Daniel Michael Blake Day-Lewis',
        movies: [
          'Gangs of New York',
          'There Will Be Blood',
          'Phantom Thread',
          'The last of the Mohicans',
        ],
      },
    ];

    const result = turnObjectIntoArray(nestedObject);
    expect(result).toEqual(arrayOfObjects);
  });
});
