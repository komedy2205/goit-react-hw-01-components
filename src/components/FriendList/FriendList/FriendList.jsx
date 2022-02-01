import PropTypes from 'prop-types';
import { Status, List, ListElement, Name } from '../styles/FriendList.styled'

export const FriendListItem = ({ friends }) => (
    <div>
        <List>
            {friends.map(({ id, isOnline, avatar, name }) => (
            <ListElement key={id}>
                    <Status isOnline={isOnline}>{isOnline}</Status>
                    <img alt='avatar' src={avatar} width={100}/>
                    <Name>{name}</Name>
            </ListElement>
            ))}
        </List>
    </div>
);
    

FriendListItem.propTypes = {
  stat: PropTypes.shape({
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
  }),
};

export default FriendListItem;