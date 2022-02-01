import PropTypes from 'prop-types';
import { ListElement, List, SpanElement } from '../../styles/Statistic.styled';
import { Container } from '../../styles/Statistic.styled'

export const StatisticData = ({ title, stats }) => {
  return <Container>
    {title && <h2>{title}</h2>}
      <List>
        {stats.map(({ id, label, percentage }) => (
            <ListElement key={id}>
              <SpanElement>{label} </SpanElement>
              <SpanElement>{percentage}%</SpanElement>
            </ListElement>
          
          )
        )}
      </List>
  </Container>
};

StatisticData.defaultProps = {
  title: '',
};
StatisticData.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default StatisticData;