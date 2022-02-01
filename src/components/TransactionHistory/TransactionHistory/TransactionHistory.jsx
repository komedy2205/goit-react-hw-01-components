import PropTypes from 'prop-types';
import { Container, ColumnElement, List, ListElement } from '../styles/Transaction.styled'

export const TransactionHistory = ({ items }) => (
    <Container>
      <thead>
        <tr>
          <ListElement>Type</ListElement>
          <ListElement>Amount</ListElement>
          <ListElement>Currency</ListElement>
        </tr>
      </thead>
      <List>
          {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
              <ColumnElement>{type} </ColumnElement>
              <ColumnElement>{amount} </ColumnElement>
              <ColumnElement>{currency} </ColumnElement>
          </tr>
          ))}
      </List>
    </Container>
);
    

TransactionHistory.propTypes = {
  stat: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
  }),
};

export default TransactionHistory;