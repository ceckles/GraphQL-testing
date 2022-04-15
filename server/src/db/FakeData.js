const UserList = [
  {
    id: 1,
    name: "Chad",
    username: "theChad",
    age: 20,
    nationality: "UNITED_STATES",
    friends:[
      {
        id: 2,
        name: "Pedro",
        username: "PedroPepe",
        age: 25,
        nationality: "BRAZIL",
      },
      {
        id:6,
        name: "Gwen",
        username: "GW123456",
        age: 20,
        nationality: "UNITED_STATES",
      },
    ],
  },
  {
    id: 2,
    name: "Pedro",
    username: "PedroPepe",
    age: 25,
    nationality: "BRAZIL",
    friends: [
      {
        id: 1,
        name: "Chad",
        username: "theChad",
        age: 20,
        nationality: "UNITED_STATES",
      },
      {
        id: 3,
        name: "Jane",
        username: "JaneDoe1",
        age: 21,
        nationality: "CANADA",
      },
    ],
  },
  {
    id: 3,
    name: "Jane",
    username: "JaneDoe1",
    age: 21,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroPepe",
        age: 25,
        nationality: "BRAZIL",
      },
      {
        id:4,
        name: "John",
        username: "John316",
        age: 20,
        nationality: "UNITED_STATES",
      },
      {
        id:5,
        name: "Chris",
        username: "Reppy",
        age: 40,
        nationality: "MEXICO", 
      },
    ],
  },
  {
    id:4,
    name: "John",
    username: "John316",
    age: 20,
    nationality: "UNITED_STATES",
    friends: [
      {
        id: 3,
        name: "Jane",
        username: "JaneDoe1",
        age: 21,
        nationality: "CANADA",
      },
      {
        id:5,
        name: "Chris",
        username: "Reppy",
        age: 40,
        nationality: "MEXICO", 
      },
    ],
  }, 
  {
    id:5,
    name: "Chris",
    username: "Reppy",
    age: 40,
    nationality: "MEXICO", 
    friends: [
      {
        id: 3,
        name: "Jane",
        username: "JaneDoe1",
        age: 21,
        nationality: "CANADA",
      },
      {
        id:4,
        name: "John",
        username: "John316",
        age: 20,
        nationality: "UNITED_STATES",
      },
    ],
  }, 
  {
    id:6,
    name: "Gwen",
    username: "GW123456",
    age: 20,
    nationality: "UNITED_STATES",
    friends:[
    {
      id: 1,
      name: "Chad",
      username: "theChad",
      age: 20,
      nationality: "UNITED_STATES",
    },
    ],
  }, 
  {
    id:7,
    name: "Brian",
    username: "BBOwns123",
    age: 22,
    nationality: "UNITED_STATES",
    friends:[],
  }
];
const MovieList = [
  {
    id: 1,
    name: "Masters of the Universe",
    yearOfPublication: 1987,
    isInTheaters: false
  },
  {
    id: 2,
    name: "Spiderman No Way Home",
    yearOfPublication: 2022,
    isInTheaters: true
  },
  {
    id:3,
    name: "Inception",
    yearOfPublication: 2010,
    isInTheaters: false
  },
  {
    id:4,
    name: "Die Hard",
    yearOfPublication: 1988,
    isInTheaters: false
  },
  {
    id:5,
    name: "Commando",
    yearOfPublication: 1985,
    isInTheaters: false
  },
  {
    id:6,
    name: "The Thing",
    yearOfPublication: 1982,
    isInTheaters: false
  }
]
module.exports = {UserList, MovieList};