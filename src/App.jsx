import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { printSavings, TransactionListMain} from './ApiFunctions'
import './App.css'
import images from './Images/images'



function datetime(){
const [time,setTime] = useState('');

useEffect(() => {
  const recur = () =>{
  var showDate = new Date();
const displaytime= String(showDate.getHours()).padStart(2,'0')+ ":" + String(showDate.getMinutes()).padStart(2,'0') + ":" + String(showDate.getSeconds()).padStart(2,'0')
setTime(displaytime)
}

recur();

const rec = setInterval(recur,1000)
return () => clearInterval(rec)

})

return(
  
  <div className='dateBox'>
    
  <p style={{textAlign:'center',color:'white'}}>{time}</p>
  </div>
)
}

function heading(){

  return(
    <div>
    <img className= 'logo' src={images.image2} alt='first image'/>
    <h1 style={{textAlign:'center'}}>upWeb</h1>
    {datetime()}
    </div>
  )
}
function imageBan(){

  return(

    <div className='bannerYellow'>
    <img src={images.yellowBan} alt='up' />
    </div>
  )
}

function infoTile(){

  return(
<div className='infoTile'>

    {printSavings("Spending")}
    {printSavings("🏠 Rent")}
    {printSavings("💰 Rego  Lmao")}
    {printSavings("⛽ Petrol")}
    {printSavings("💰 Home deposit")}

    </div>
  )
}
function accountInfo(){


  return (
<div  className='MainSquare'>
      {heading()}
     
      {infoTile()}
        
</div>
  )
}




function App() {

 
  return(
    
    <div>

   {accountInfo()}
   
    {TransactionListMain()}
{/*
{imageBan()}
We create a list item, then for every new line we check if there is an extra piece of data to check with null,
return the informatoin, place it in the list, then print a new line, increase the index by 1.

Elements:
for some reason style is not working on the on anyting but <p>
*/  
}
</div>
 )
}

export default App
