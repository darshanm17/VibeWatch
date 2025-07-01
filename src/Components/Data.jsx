import React, { useEffect, useState } from 'react'

export default function Data() {

const APIkey='&api_key=689d04f0726c8e2a1abdda1749ea79e6';
const baseUrl='https://api.themoviedb.org/3';
const searchURL=baseUrl+'/search/movie?'+APIkey;
const APIurl=baseUrl+'/discover/movie?sort_by=popularity.desc'+APIkey;
const tvUrl=baseUrl+'/discover/tv?sort_by=popularity.desc'+APIkey;
const imageUrl="https://image.tmdb.org/t/p/w500";

const[movies,setMovies]=useState({})

const getMovie=()=>{
    fetch(APIurl).then(
        response=>{
            return response.json();
        }
    ).then(
        data=>{
            setMovies(data);
            console.log(data);
        }
    )
}
useEffect([
  getMovie()  
])
  return (
    <>
    
    </>
  )
}
