import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const api = 'up:yeah: API KEY GOES HERE'

export function printName(e){

    //this code will call in theory if there is an account, so using the function below,
    //it will fitler throught in the same way, then return if there is an account, print the div then check again.
  
    return e
  }

export function printSavings(e){
// take the variable here 

    const [value,setAccountValue] = useState([])
    const [valueInAccount,setAcct] = useState('')
 
    useEffect(()=>{
    
      const search2 = () => {

      const URL = 'https://api.up.com.au/api/v1/accounts'
      const headers = {'Authorization': `Bearer ${api}`}
      fetch(URL,{headers})
      .then((response) => response.json())
      .then((data) => setAccountValue(data.data))
     
       
     
          //.data[0].attributes.balance.value

      }
      search2();
      const inter = setInterval(search2,30000);
      return () => clearInterval(inter)
      
    },[])
  
    //value here = the array.
    // I have 4 arrays. with information that has arrays in them but we know that he information I am
    // looking for is in vaalue[].attributes.dislpayName <-- whatever is in display name is what we want to check
    /*

   for (let i = 0; i < value.length; i++) {
    console.log(value[i].attributes.displayName)
    if(value[i].attributes.displayName == e){

      setAcct(value[i].attributes.balance.value)

    }

    initially i had the above code, which wouldnt work, as it would create an infinite loop,
    putting the code into chat gpt, it mentioned the need for useEffect, which will only loop through when e is changed or value,
    which is checked on the setInterval and not the rendering of the website.


    */

    useEffect(()=>{

      const account = value.find(acc => acc.attributes.displayName === e);
      if(account){
        setAcct(account.attributes.balance.value)
      }

    })
   
    
   
 
    return(

      <div className='square'>
      <p style={{color:'white',fontSize:20}}>{printName(e)}: ${valueInAccount}</p>
      </div>
    )
  }
  
export function TransactionList({transaction}){
//printing transactions from spending.


      
//thought about turning this into an array which reads the json, then reduces the information that i want to an array.
// have an area
// ask chat gpt what is the best practise to display the information in data, arrays or json.

// i want to return the json as a div essentially, to put in rows for every data component.
  // useEffect(() => {

  //   const infoTransaction = value.find(acc => acc.attributes.displayName === e);
  //     if(account){
  //       setAcct(account.attributes.balance.value)
  //     }

  // })
    
 
  
  return(
  <div className='transactionSquare'>
 {console.log(transaction)}
 <p><strong>Amount:</strong> ${transaction.attributes.amount.value} <strong>Time: </strong>{transaction.attributes.createdAt}</p>

<p><strong>Recepient: </strong>{transaction.attributes.description} </p>
 
 <p><strong>Status: </strong> {transaction.attributes.status}</p>
  </div>
  )
  
  }

export function TransactionListMain(){

  const [transactions,setTrans] = useState([])



  useEffect(()=>{
    const search3 = () => {
      const URL = 'https://api.up.com.au/api/v1/transactions?page[size]=100'
      const headers = {'Authorization': `Bearer ${api}`}
      fetch(URL,{headers})
      .then((response) => response.json())
        .then((data) => setTrans(data.data))
    }

    search3()
    const inter = setInterval(search3,30000);
    return () => clearInterval(inter)

     },[])
    

return(
<div className='transactions'>
<h2 >Transactions</h2>

{transactions.length-1 > 0 ? (
        transactions.map((transaction, index) => (
          <TransactionList key={index} transaction={transaction} />
        ))
      ) : (
        <p>Loading transactions...</p>
      )}
</div>
)
}