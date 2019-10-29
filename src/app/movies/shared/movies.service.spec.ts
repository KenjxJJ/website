import { MoviesService } from './movies.service';

describe('Movies Service ', () => {
       let service: MoviesService;
      let Movie;

       beforeEach( () => {
        service  = new MoviesService();
        Movie = {
          objectId: 'n4mV28e42t',
          image: {
              __type: 'File',
              name: 'c6b7a11f-d1cb-427f-b784-4475f033fc48_1.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/c6b7a11f-d1cb-427f-b784-4475f033fc48_1.jpg'
          },
          createdAt: '2016-10-10T13:26:10.427Z',
          updatedAt: '2016-12-14T12:00:50.408Z',
          title: 'Dawn of the Planet of the Apes',
          releaseYear: '2014',
          genre: [
              'Action',
              'Drama',
              'Sci-Fi'
          ],
          rating: 8.3,
          description: 'A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes'
      };
      });

       it('should have some movies on the list', () => {
           expect(service.getMovies().length).toBeGreaterThan(0);
      });

       it('should get a movie', () => {
         service =  new MoviesService();
         expect(service.getMovie(Movie.objectId)).toBeTruthy();
      });

       it('should get the movieGenre by movie ID', () => {
         expect(service.getMovieGenre(Movie.objectId).length).toBe(1);

      });
       it('should search movies by an id', () => {
         console.log('Searched movies by id "n4mV28e42t" ', service.searchMovies('n4mV28e42t'));
         expect( service.searchMovies('n4mV28e42t').length).toBeGreaterThanOrEqual(0);
      });
});
