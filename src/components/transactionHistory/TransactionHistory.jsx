import PropTypes from 'prop-types'
import s from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    return (
<table className={s.table}>
  <thead id ={items.id}>
    <tr>
      <th  className={s.head}>Type</th>
      <th className={s.head}>Amount</th>
      <th className={s.head}>Currency</th>
    </tr>
  </thead>

    <tbody className={s.tbody}>
        {items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </tr>
        ))}
    
  </tbody>
</table>
    )
}

TransactionHistory.prototypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency:PropTypes.string.isRequired
}

export default TransactionHistory;