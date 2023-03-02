import NavBar from '@/components/NavBar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Seo from './Seo';
// import '../styles/globals.css'; //동작 x
// Global CSS cannot be imported from files other than your Custom <App>. 

const API_KEY = "10923b261ba94d897ac6b81148314a3f";
// api key 숨기기

export default function Home({results}) {
  const router = useRouter();

  const onClickMovie = (id, title) => {
    console.log(id);
    // router.push(`/movies/${id}`);
    
    // 1. masking
    // router.push(
    //   {
    //     pathname: `/movies/${id}`,
    //     query: {
    //       id
    //       , title
    //     }
    //     // -> query 미쳤는데?
    //   }, `/movies/${id}`);
    //   // 마지막 param 은 url "as"

    // 2. no masking
    router.push({ pathname: `/movies/${title}/${id}`})

  }

  return (
    <div className="container">
      <Seo title="Home" />
      {/* pre-rendering */}
      {/* view-source:http://localhost:3000/ */}
      {/* use effect 이후로 data 를 loading 한 후에 실제 데이터를 가져온다. */}
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => (
        // <Link href={`/movies/${movie.id}`} key={movie.id} legacyBehavior>
        //   <div className="movie" key={movie.id}>
        //   <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        //     <h4>{movie.original_title}</h4>
        //   </div>
        // </Link>
        <div onClick={()=> onClickMovie(movie.id, movie.title)}className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            {/* 1. masking */}
            {/* <Link href={{pathname: `/movies/${movie.id}`,
              query: {
                title : movie.original_title
              }}}
              as={`/movies/${movie.id}`} legacyBehavior> */}
            <Link href={{pathname: `/movies/${movie.original_title}/${movie.id}`}} legacyBehavior>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
        a{
          text-decoration: none;
          color: black;
        }
      `}</style>
    </div>
  );
}

// export 필수 function name 도 고정
// running server
export async function getServerSideProps(){
  // only going to server not client
  // not show to client
// dosen't works because /api/movies is front url
// so, http://localhost:3000 으로 변경
  console.log("getserverprops")
  // {/* view-source:http://localhost:3000/ */} 기존에 loading... 창에서 server side에서 data 까지 rendering 해서 return
  const {results} = await (await fetch(`http://localhost:3000/api/movies`)).json();
  console.log(results);
  return{
    props: {
      results
    }
  }  
}