Testing out GraphQL, Apollo, lodash.
Learning: Typedefs, resolvers, query, mutation, input




```GraphQL
##Get All users
# query GetUsers {
#   users {
#     id
#     name
#     username
#     age
#     nationality
#     friends {
#       id
#       name
#       username
#     }
#   }
#   }
# }

##Get A User
# query GetUser($userId: ID!){
#   user(id: $userId) {
#     name
#     age
#     nationality
#     friends {
#       name
#       username
#     }
#   }
# }

##Get All Movies
# query GetMovies {
#   movies{
#     id
#     name
#     yearOfPublication
#     isInTheaters
#   }
# }

##Get A Movie
# query GetMovie($name: String!){
#   movie(name: $name) {
#     id
#     name
#     yearOfPublication
#     isInTheaters
#   }
# }

##Get A User and fave movies
# query User($userId: ID!) {
#   user(id: $userId) {
#     id
#     name
#     username
#     age
#     nationality
#     friends {
#       name
#     }
#     favoriteMovies {
#       name
#       yearOfPublication
#       isInTheaters
#     }
#   }
# }

##Create a User
# mutation CreateUser($createUserInput: CreateUserInput!) {
#   createUser(input: $createUserInput) {
#     name
#     username
#     age
#   }
# }

##Update User
# mutation UpdateUser($updateUserInput: UpdateUserInput!) {
#   updateUser(input: $updateUserInput) {
#     name
#     username
#     age
#   }
# }

##Body
{
  // "userId":1,
  // "createUserInput":{
  //   "name": "Hello",
  //   "username": "thatguy12",
  //   "age": 21
  // },
  "updateUserInput":{
    "id":1,
    "name":"Smiles",
    "username":"Happy247",
    "age":33,
    "nationality": "MEXICO"
  }
  
}
```