import React from 'react'

import "./CardCollection.css";
import Card from './card';
import Carousel from "react-elastic-carousel";
import {CardDataCode}  from './CardDataCode';
import Card2 from './card2';
import {CardDataGov}  from './CardDataGov';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


const CardCollectionExam = () => {
  return (
    <div className ="container">

    <div className ="div1">
        <div className="sub-heading">
          <h2> Competitive exams  </h2> <br/>
       
        </div>
      
        <Carousel breakPoints= {breakPoints}>
      <Card position={CardDataCode[0].position}  name= {CardDataCode[0].name} story = {CardDataCode[0].story} source  = {CardDataCode[0].source}/>
      <Card position={CardDataCode[2].position}  name= {CardDataCode[2].name} story = {CardDataCode[2].story} source  = {CardDataCode[2].source}/>
      <Card/>
      <Card />
      <Card/>
      </Carousel>
     
      
    </div>
    

    <div className ="div2">
    <div className="sub-heading">
          <h2> UPSC </h2> <br/>
          
        </div>
       
        <Carousel breakPoints= {breakPoints}>
        <Card2 position={CardDataCode[0].position}  name= {CardDataCode[0].name} story = {CardDataCode[0].story} source  = {CardDataCode[0].source}/>
      <Card2 position={CardDataCode[1].position}  name= {CardDataCode[1].name} story = {CardDataCode[1].story} source  = {CardDataCode[1].source}/>
      <Card2 position={CardDataCode[2].position}  name= {CardDataCode[2].name} story = {CardDataCode[2].story} source  = {CardDataCode[2].source}/>
      <Card2 position={CardDataCode[3].position}  name= {CardDataCode[3].name} story = {CardDataCode[3].story} source  = {CardDataCode[3].source}/>
      <Card2/>
      </Carousel>
     
</div>


<div className ="div3">
<div className="sub-heading">
          <h2> CAT/GMAT </h2> <br/>
        </div>

        <Carousel breakPoints= {breakPoints}>
        <Card2 position={CardDataGov[0].position}  name= {CardDataGov[0].name} story = {CardDataGov[0].story} source  = {CardDataGov[0].source}/>
        <Card2 position={CardDataGov[1].position}  name= {CardDataGov[1].name} story = {CardDataGov[1].story} source  = {CardDataGov[1].source}/>
        <Card2 position={CardDataGov[2].position}  name= {CardDataGov[2].name} story = {CardDataGov[2].story} source  = {CardDataGov[2].source}/>
      <Card2/>
      </Carousel>
</div>





    </div>
  );
}

export default CardCollectionExam;