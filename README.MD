Testing out GraphQL, Apollo, lodash and yarn instead of npm(ish).
Learning: Typedefs, resolvers, query, mutation, input

``` Setup/Run
yarn instal

yarn start
```




```GraphQL
#Get All users
query GetUsers {
  users {
    id
    name
    username
    age
    nationality
    friends {
      id
      name
      username
    }
  }
  }

#Get A User
query GetUser($userId: ID!){
  user(id: $userId) {
    name
    age
    nationality
    friends {
      name
      username
    }
  }
}

#Get All Movies
query GetMovies {
  movies{
    id
    name
    yearOfPublication
    isInTheaters
  }
}

#Get A Movie
query GetMovie($name: String!){
  movie(name: $name) {
    id
    name
    yearOfPublication
    isInTheaters
  }
}

#Get A User and fave movies
query User($userId: ID!) {
  user(id: $userId) {
    id
    name
    username
    age
    nationality
    friends {
      name
    }
    favoriteMovies {
      name
      yearOfPublication
      isInTheaters
    }
  }
}

#Create a User
mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(input: $createUserInput) {
    name
    username
    age
  }
}

#Update User
mutation UpdateUser($updateUserInput: UpdateUserInput!) {
  updateUser(input: $updateUserInput) {
    name
    username
    age
  }
}


#Create a Movie
mutation CreateMovie($input: CreateMovieInput!) {
  createMovie(input: $input) {
    name
    isInTheaters
    yearOfPublication
  }
}

#Update a Movie
mutation UpdateMovie($updateMovieInput2: UpdateMovieInput!) {
  updateMovie(input: $updateMovieInput2) {
    name
    isInTheaters
    yearOfPublication
  }
}


#Delete a User
mutation DeleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    id
  }
}

##Body
{
  "userId":1,
  "createUserInput":{
    "name": "Hello",
    "username": "thatguy12",
    "age": 21
  },
  "updateUserInput":{
    "id":1,
    "name":"Smiles",
    "username":"Happy247",
    "age":33,
    "nationality": "MEXICO"
  },
  "input": {
    "name": "The Hulk",
    "yearOfPublication": 2002,
    "isInTheaters": false
  },
  "updateMovieInput2": {
    "id": 5,
    "name": "The Commando",
    "yearOfPublication": 2022,
    "isInTheaters": true
  },
  "deleteUserId": 1
}
```