import { ProfileDataStyle, ListElement, Avatar, Discription, List } from './Profile.styled';
// import { Container } from './Profile.styled'


export const ProfileData = ({ user }) => {
    return <ProfileDataStyle>
        <div>{user.map(user => (
      <ProfileData key={user.username} user={ user }/>
            ))}
            <Avatar
                src={user.avatar} width={100}
                alt="avatar"
            />
            <Discription>{user.username}</Discription>
            <Discription>{user.tag}</Discription>
            <Discription>{user.location}</Discription>
        </div>

        <List>
            <ListElement>
                <span>Followers <br/></span>
                <span>{user.stats.followers}</span>
            </ListElement>
            <ListElement>
                <span>Views <br/></span>
                <span>{user.stats.views}</span>
            </ListElement>
            <ListElement>
                <span>Likes <br/></span>
                <span>{user.stats.likes}</span>
            </ListElement>
        </List>
    </ProfileDataStyle>;
}