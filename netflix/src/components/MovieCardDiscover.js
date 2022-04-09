import Link from "next/link";
import Modal from './Modal';
import { useState } from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const MovieCardDiscover = ({movie,isPoster}) => {
 // const link = 'https://api.themoviedb.org/3/discover/movie?api_key=7f73b4bd455e5ace6fdc9f0d04e45857&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
 
 const [popup, setPopup] = useState(false);

 function handleClickPopup(){
   popup? setPopup(false) : setPopup(true);
 }  

 function handleClosePopup(){
  setPopup(false);
}  

 const dateParser = (date) =>{
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
      year:"numeric",
      month:"long",
      day: "numeric",
    

    })
    return newDate;
  }

  const bannerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",

 }
    return (
      <>
        <div key={movie.id}>
            {isPoster? (
               <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
               className="row__image" 
               alt={`${movie.title} || ${movie.name} || ${movie.original_title} `} 
                /> 
                ) :
                (
                  <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                  className="row__image" 
                  alt={`${movie.title}`}
                   /> 
                )}
                
                
                <center><button className="detail_plus banner__button" onClick={handleClickPopup}><HelpOutlineIcon/> Plus d'infos</button></center>

           <Modal 
           bannerStyle={bannerStyle}
           movie={movie}
           popup={handleClickPopup}
           popupStatut={popup}/>

            
          </div>
         
       </> 
    );
}
//"{props.movie?.title || props.movie?.name || props.movie?.original_title}"
export default MovieCardDiscover;