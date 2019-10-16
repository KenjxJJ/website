export  interface IMovies {
        objectId: string;
        image: {
            __type: string
            name: string
            url: string
        };
        createdAt: string;
        updatedAt: string;
        title: string;
        releaseYear: string;
        genre: any[];
        rating: number;
        description: string;
}
