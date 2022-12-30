import React, {useState } from "react";
import "./InterestCalulator.scss";
import { useDispatch } from "react-redux";
import { addToSI,addToCI,setType, setRangeForCI,setRangeForSI } from "../../features/Simple-Compound/InterestSlice";
import Chart from "../Chart/Chart";

const IntrestCalulator = () => {

  const dispatch = useDispatch();
  const [interestType, setInterestType] = useState('SI');
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [period, setPeriod] = useState(0);
  const [interestEarned,setInterestEarned] = useState(0);
  const [totalValue,setTotalValue]= useState(0);
  const [frequency, setFrequency] = useState('D');

  const simpleInterest=()=>{
    let interest;
       for(let i =0;i<=period;i++){
         let periodInYear = i/12;
         interest = (principal*rate*periodInYear)/100;
         dispatch(addToSI(interest))
        }
        let total = Number(principal) +Number(interest);
        setTotalValue(total)
        setInterestEarned(interest);
  }
  // calculate compound Interest
  const compoundInterest=()=>{
    let n = 0;
      switch (frequency) {case 'D':n = 365;break;case 'W':n = 52;break;case 'M':n = 12;break;case 'Q':n = 4;break;case 'H':n=2;break;case 'A':n=1;break;default:n=365;break;}
      let r = rate/100;
      let t,amount,interest;
      for(let i=0;i<=period;i++){
       t = i/12;
       amount = principal* (Math.pow((1 + (r/n)), ( n* t)));
       interest = amount-principal;
       dispatch(addToCI(interest));
      
    }
    setTotalValue(amount);
    setInterestEarned(interest);
  }
  // Calculate overAll 
  const Calculate=()=>{
    if(interestType ==='SI'){
      dispatch(setType(interestType));
      dispatch(setRangeForSI(period))

      simpleInterest()
    }
    else if(interestType ==='CI'){
      dispatch(setType(interestType));
      dispatch(setRangeForCI(period))
      compoundInterest()
    }
    else{
      alert('Something went Wrong!')
    }
  }

  return (
    <>
      <div className="wrapper">

        <div className="form-wrapper">
          <div className="form-container">

            <div className="interest-dropdown-wrapper">
              <label htmlFor="interest-type">Interest Type</label>
              <select name="interest-type" id="interest-type" value={interestType} onChange={(e)=>{setInterestType(e.target.value)}}>
                <option value="SI">Simple Interest</option>
                <option value="CI">Compound Interest</option>
              </select>
            </div>

            <div className="principal-amount-wrapper">
              <label htmlFor="principal-amount">Principal Amount</label>
              <input type="number" id="principal-amount"value={principal} onChange={(e)=>{setPrincipal(e.target.value)}}/>
            </div>
            
          <div className="rate-frequency">
            <div className="annual-rate-wrapper">
              <label htmlFor="annual-rate"> Rate(%)</label>
              <input type="number" id="annual-rate" value={rate} onChange={(e)=>{setRate(e.target.value)}}/>
            </div>

            <div>
            <label htmlFor="frequency"> Frequency(CI)</label>
              <select name="frequency" id="frequency" value={frequency} onChange={(e)=>{setFrequency(e.target.value)}}>
                <option value="D">Daily</option>
                <option value="W">Weekly</option>
                <option value="M">Monthly</option>
                <option value="Q">Quaterly</option>
                <option value="H">Half-yearly</option>
                <option value="A">Annually</option>
              </select>
            </div>
          </div>


            <div className="loan-period-wrapper">
              <label htmlFor="loan-period">Loan Period (in months)</label>
              <input type="number" id="loan-period" value={period} onChange={(e)=>{setPeriod(e.target.value)}}/>
            </div>

            <div>Principal Amount: ₹ {principal}</div>
            <div>Interest Earned: ₹ {interestEarned}</div>
            <div>Total Value: ₹ {totalValue}</div>
            <button id="btn-calculate" onClick={Calculate}>Calculate</button>

          </div>
        </div>

        <div className="chart-wrapper">
          <Chart/>
        </div>

      </div>
    </>
  );
};

export default IntrestCalulator;
