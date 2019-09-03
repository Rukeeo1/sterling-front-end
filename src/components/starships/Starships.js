import React from 'react'
import starship1 from '../../assests/starship-1.jpg'
import './css/Starship.css'
import Card from '../card/Card.js'




function Starships(){
  return (
    <>
    <div className="d-flex justify-content-between starship-flex">
   <Card wrappingDiv="card shadow" objectName="Ghost" imageSource={starship1} description="The Ghost is a modified VCX-100 light weight manufactured by the Canadian Engineering Corporation" readmorestyle="space-ship-readmore" style={{marginTop:"20px"}}/>

   <Card wrappingDiv="card shadow" objectName="Ghost" imageSource={starship1} description="The Ghost is a modified VCX-100 light weight manufactured by the Canadian Engineering Corporation" readmorestyle="space-ship-readmore"/>

   <Card wrappingDiv="card shadow" objectName="Ghost" imageSource={starship1} description="The Ghost is a modified VCX-100 light weight manufactured by the Canadian Engineering Corporation" readmorestyle="space-ship-readmore"/>

   <Card wrappingDiv="card shadow" objectName="Ghost" imageSource={starship1} description="The Ghost is a modified VCX-100 light weight manufactured by the Canadian Engineering Corporation" readmorestyle="space-ship-readmore"/>

   <Card wrappingDiv="card shadow" objectName="Ghost" imageSource={starship1} description="The Ghost is a modified VCX-100 light weight manufactured by the Canadian Engineering Corporation" readmorestyle="space-ship-readmore"/>

   <Card wrappingDiv="card shadow" objectName="Ghost" imageSource={starship1} description="The Ghost is a modified VCX-100 light weight manufactured by the Canadian Engineering Corporation" readmorestyle="space-ship-readmore"/>
   </div>
   </>
  )
}

export default Starships;