import React from 'react'

const View_Receipt_details = ({receipt_details}) => {
  return receipt_details.map ( receipt => (
    // <tr key={receipt.date}>
    <tr key={receipt}>  
    <td>{receipt.date}</td>
    <td>{receipt.amount_detail}</td>
    <td>{receipt.payment}</td>
    <td>{receipt.remark_detail}</td>

    </tr>
  )
  )
}

export default View_Receipt_details