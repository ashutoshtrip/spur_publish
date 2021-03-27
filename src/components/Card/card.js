import React, {useState} from 'react';
import "./card.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Rand from './Modal/ModalCard';
import { CardDataCode } from './CardDataCode';

function Card (props) 
{


  return (
    <>
           <div className="card-body">
               <div className="card1-top">
                   <img  src ={props.source} />
                   
               </div>

               <div className="card-bottom">
                  <h3  className="h3-name"> {props.name} </h3>
                  <h5 className="h5-position"> {props.position} </h5>
                  <p className="p-story"> {props.story} </p>
                  
                 </div>
                 <div className ="see-more-icon">
                
                    <FavoriteIcon className ="heart-icon" />
                     
                     
                    <Rand name = {props.name} story={props.story} position = {props.position}/>
                   
                    
                    <ShareIcon className ="share-icon" />
                    </div>
                

             </div>
             </>
  );
}
export default Card;
