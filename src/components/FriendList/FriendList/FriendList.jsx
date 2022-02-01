import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline }}) => {
    return <div>
        <ul>
            <li>{ isOnline }</li>
            <li src={avatar} alt="User avatar" width="50"/>
            <li>{ name }</li>
        </ul>
    </div>
};
    

FriendListItem.propTypes = {
  stat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export default FriendListItem;