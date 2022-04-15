//DisplayData
import React from 'react'
import {useQuery, gql} from '@apollo/client';

//GQL Statement
//User Query
const QUERY_ALL_USERS = gql`
    query GetAllUsers {
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
`;
//Movie Query
const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies{
            id
            name
            yearOfPublication
            isInTheaters
        }
    }
`;

const DisplayData = () => {
    const {data:usersData, loading:usersLoading, error:usersError} = useQuery(QUERY_ALL_USERS);
    const {data:moviesData, loading: moviesLoading, error:moviesError} = useQuery(QUERY_ALL_MOVIES);

    if(usersError || moviesError) {
        return <h1>Database Error!</h1>
    }
    if(usersLoading || moviesLoading){
        return <h1>Loading Data...</h1>
    }
    if(usersData && moviesData){
        return(
            <div>
            <h1>Users:</h1>
            {
                usersData &&
                usersData.users.map((user) =>{
                    return (
                        <div key={user.id}>
                            <h2>Name: {user.name}</h2>
                            <h2>Username: {user.username}</h2>
                            <h2>Age: {user.age}</h2>
                            <h2>Nationality: {user.nationality}</h2>
                            <h2>Friends:
                                {
                                    user.friends && user.friends.map((friend) =>{
                                    return(<p key={friend.id}>{friend.name}</p>)})
                                }
                            </h2>
                        </div>
                    );
                })
            }
            <br/>
            <h1>Movies:</h1>
            {
                moviesData && moviesData.movies.map((movie) =>{
                    return(
                        <div key={movie.id}>
                            <h2>{movie.name}</h2>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default DisplayData