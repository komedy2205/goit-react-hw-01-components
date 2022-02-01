import PropTypes from 'prop-types';
// import { Status, List, ListElement, Name } from '../styles/FriendList.styled'

export const TransactionHistory = ({ items }) => (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
                <td>{type} </td>
                <td>{amount} </td>
                <td>{currency} </td>
            </tr>
          ))}
      </tbody>
    </table>
);
    

TransactionHistory.propTypes = {
  stat: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
  }),
};

export default TransactionHistory;