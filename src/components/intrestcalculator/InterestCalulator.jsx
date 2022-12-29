import React, {useState, useEffect } from "react";
import "./InterestCalulator.scss";

const IntrestCalulator = () => {
  const [interestType, setInterestType] = useState('SI');
  const [prinipal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [period, setPeriod] = useState(0);


  useEffect(()=>{
    console.log(interestType)
    console.log(prinipal)
    console.log(rate)
    console.log(period)
  },[])
  // calculate simple Interest
  const simpleInterest=()=>{
      console.log('SI calculated')
  }
  // calculate compound Interest
  const compoundInterest=()=>{
    console.log('CI calculated')

  }
  // Calculate overAll 
  const Calculate=()=>{
    if(interestType=='SI'){
        simpleInterest()
    }
    else if(interestType=='CI'){
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
            <h2>Interest Calculator</h2>

            <div className="interest-dropdown-wrapper">
              <label htmlFor="interest-type">Interest Type</label>
              <select name="interest-type" id="interest-type" value={interestType} onChange={(e)=>{setInterestType(e.target.value)}}>
                <option value="SI">Simple Interest</option>
                <option value="CI">Compound Interest</option>
              </select>
            </div>

            <div className="principal-amount-wrapper">
              <label htmlFor="principal-amount">Principal Amount</label>
              <input type="number" id="principal-amount"value={prinipal} onChange={(e)=>{setPrincipal(e.target.value)}}/>
            </div>

            <div className="annual-rate-wrapper">
              <label htmlFor="annual-rate">Annual Interest Rate(%)</label>
              <input type="number" id="annual-rate" value={rate} onChange={(e)=>{setRate(e.target.value)}}/>
            </div>

            <div className="loan-period-wrapper">
              <label htmlFor="loan-period">Loan Period (in months)</label>
              <input type="number" id="loan-period" value={period} onChange={(e)=>{setPeriod(e.target.value)}}/>
            </div>

            <div>Principal Amount: ₹ {prinipal}</div>
            <div>Interest Earned: ₹ 0</div>
            <div>Total Value: ₹ 0</div>
            <button id="btn-calculate" onClick={Calculate}>Calculate</button>

          </div>
        </div>

        <div className="chart-wrapper">
          <h1>chart</h1>
        </div>

      </div>
    </>
  );
};

export default IntrestCalulator;
