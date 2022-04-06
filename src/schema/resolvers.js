const { UserList, MovieList } = require('../db/FakeData');
const _ = require('lodash');

const resolvers = {
    Query: {
        //User resolvers
        users: () =>{
            //return all users
            return UserList; 
        },
        user: (parent, args) =>{
            //find a user and return 
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },
        //Movie resolvers
        movies:() =>{
            //return all movies
            return MovieList;
        },
        movie: (parent, args) =>{
            //Find a movie and return
            const name = args.name;
            const movie = _.find(MovieList, { name });
            return movie;
        },
    },

    //get user fav movies and attach to user
    User: {
        favoriteMovies: () =>{
            //Here you can evaluate the movie beter later and return 
            return _.filter(MovieList, (movie) => movie.yearOfPublication >= 1985 && movie.yearOfPublication <= 2010 );
        }
    },

    Mutation: {
        //Create a user and add to list
        createUser: (parent, args) =>{
            //Get Passed in user data
            const user = args.input;
            console.log("User:", user);
            //Get last ID and assign +1 to user
            const lastID = UserList[UserList.length - 1].id;
            user.id = lastID + 1;
            //Old Facebook 0 user is always your friend
            user.friends = [UserList[0]];
            UserList[0].friends.push(user);
            //Add To list
            UserList.push(user);
            //return user
            return user;
        },
        //Update user info
        updateUser: (parent, args) =>{
            //get User
            const updateUser = args.input;
            const user = _.find(UserList, { id: Number(updateUser.id) });
            if(user.name != updateUser.name){ user.name = updateUser.name; }
            if(user.username != updateUser.username){ user.username = updateUser.username; }
            if(user.age != updateUser.age){ user.age = updateUser.age;}
            if(user.nationality != updateUser.nationality){ user.nationality = updateUser.nationality;}
            UserList[_.findIndex(UserList, {id: Number(updateUser.id)})] = user;
            return user;
        },
        //Delete User
        deleteUser: (parent,args) =>{
            //get id
            const id = args.id;
            _.remove(UserList, (user) => user.id === Number(id));
            return null;
        },
        //Create Movie
        createMovie: (parent, args) =>{
            //get new movies
            const newMovie = args.input;
            //get last ID of movie list
            const lastID = MovieList[MovieList.length - 1].id +1 ;
            newMovie.id = lastID;
            //add to list
            MovieList.push(newMovie);
            //return movie
            return newMovie;
        },
        //Update Movie
        updateMovie: (parent,args) =>{
            //Get new movie data
            const updateMovie = args.input;
            //Get old movie data
            const movie = _.find(MovieList, { id: Number(updateMovie.id)});
            //Validation checks and change data if dif
            if(movie.name !== updateMovie.name){ movie.name = updateMovie.name}
            if(movie.isInTheaters !== updateMovie.isInTheaters){ movie.isInTheaters = updateMovie.isInTheaters}
            if(movie.yearOfPublication !== updateMovie.yearOfPublication){ movie.yearOfPublication = updateMovie.yearOfPublication}
            //return movie
            return movie;
        }
    },
};
module.exports = { resolvers };

//Testing:
        // favoriteMovies: (parent, args) =>{
        //     console.log(args.favoriteMovies);
        //     const id = args.favoriteMovies;
        //     return _.filter(MovieList, (movie) => id.includes(movie.id));
        // }