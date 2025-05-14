import { useState } from "react";
import Yourinfo from "../components/CustomerSupport/Yourinfo";
import "./Complaint.css";
import PurchaseInfo from "../components/CustomerSupport/PurchaseInfo";
import Productinfo from "../components/CustomerSupport/Productinfo";
import Addressinfo from "../components/CustomerSupport/Addressinfo";
import ComplaintRegisterSuccessfully from "../components/CustomerSupport/ComplaintRegisterSuccessfully";
const message = [
  <Yourinfo/>,
  <PurchaseInfo/>,
  <Productinfo/>,
  <Addressinfo/>,
  <ComplaintRegisterSuccessfully/>
];

export default function ComplaintPages(){
  const [step,setstep] = useState(1);
 

  function handlePrevious(){
    if(step >1)setstep(step-1);
  }

  function handleNext(){
    if(step<5)setstep(step+1);

  }
  return <div>
   
    <div className="steps">
  <div className="numbers">
  <div className={step >= 1 ? 'active': ''}>1</div>
  <div className= {step >= 2 ? 'active': ''}>2</div>
  <div className={step >= 3 ? 'active': ''}>3</div>
  <div className={step >= 4 ? 'active': ''}>4</div>
  
  </div>
  
  <p className="message">{ (step ==1 ? "Yourinfo":
   step ==2?"Purchaseinfo":
    step == 3?"Productinfo":
     step == 4?"Addressinfo":"")}{message[step -1]}
  </p>
  <div className="buttons">
    <button style={{backgroundColor:"#7950f2",color:"#fff"}} 
    onClick={handlePrevious}>
    Previous
    </button>
    <button style={{backgroundColor:"#7950f2",color:"#fff"}}
    onClick={handleNext}>
    Next
    </button>
    
  </div>
  </div>
  </div>;
}