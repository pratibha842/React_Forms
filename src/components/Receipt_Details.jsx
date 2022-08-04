import React from 'react'
import './receipt_details.css'
import { Form } from 'react-bootstrap'
import View_Receipt_details from './View_Receipt_details';
import {useState, useEffect} from 'react'

const getLocalStorageData = () => {
    const data = localStorage.getItem('receipt_details');
    if(data) {
        return JSON.parse(data);
    }
    else{
        return[];
    }
}

const Receipt_Details = () => {

    const [receipt_details ,setReceiptDetails] = useState([getLocalStorageData()]);
    const [date, setDate] = useState('');
    const [amount_detail, setAmount] = useState('');
    const [remark_detail, setRemark] = useState('');
    const [payment, setPayment] = useState('s');

    const handleAddDetailsSubmit = (e) => {
        e.preventDefault();

        let receipt ={
            date,
            amount_detail,
            remark_detail,
            payment
        }

        setReceiptDetails ([...receipt_details,receipt])
        setDate('');
        setAmount('');
        setRemark('');
        setPayment('');
    }

    useEffect(()=>{
        localStorage.setItem('receipt_details',JSON.stringify(receipt_details));
    },[receipt_details])

  return (
    <div className='container main__container'>
        <div className='form_details'>
            <div className='title'>
                <h1>Receipt Details</h1> 
            </div>
            <Form autoComplete='off'  onSubmit={handleAddDetailsSubmit}>
                <div className='design_form'>
                    Date<span className='red'>*</span> 
                    <input type='text' 
                    onChange={(e)=>setDate(e.target.value)}
                    name='Date'
                    value={date} 
                    className='input_deisgn' 
                    size={36} placeholder='Enter Date'></input><br></br>
                    <br></br>

                    Amount<span className='red'>*</span> 
                    <input type='text' 
                    onChange={(e)=>setAmount(e.target.value)}
                    name='Amount' 
                    value={amount_detail}
                    className='amount_design' 
                    size={70} placeholder='Enter Amount (in INR)'></input><br></br>
                    <br></br>

                    
                    Payment Mode<span className='red'>*</span>   
                    <select id="paymentlist" name="payment" className='payment_design' onChange={(e)=>setPayment(e.target.value)}>
                        <option value="GPAY">GPay</option>
                        <option value="Cash">Cash</option>
                        <option value="Paytm">Paytm</option>
                    </select>

                    <div className='remark'>
                    Remark
                    <input type='text'
                    value={remark_detail}
                    onChange={(e)=>setRemark(e.target.value)}
                     name='Remark' 
                     size={70} placeholder='Enter remark' className='remark_deisgn'></input><br></br>
                    <br></br>
                    </div>

                    <button type='cancel' className='receipt_cancel'>CANCEL</button> &nbsp;

                    <button type='submit' className='receipt_submit'>SUBMIT</button>
    
                </div>
            </Form>
        </div>

        <div className='view-container'>
                {receipt_details.length >0&& <>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                   
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Payment</th>
                                    <th>Remark</th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* <tr> */}
                                <View_Receipt_details receipt_details={receipt_details}/>
                                    {/* <td>{date}</td>
                                    <td>{amount_detail}</td>
                                    <td>{result}</td>
                                    <td>{remark_detail}</td>
                                    </tr>     */}

                            </tbody>
                        </table>
                    </div>
                </>}    

                {receipt_details <1}
            </div>
    </div>
  )
}

export default Receipt_Details