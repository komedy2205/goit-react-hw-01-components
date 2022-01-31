import { ProfileDataStyle, ListElement, Avatar, Discription, List } from '../styles/Profile.styled';
import { Container } from '../styles/Profile.styled'


export const ProfileName = ({ user }) => {
  return <Container>
    {user.map(user => (
      <ProfileData key={user.username} user={ user }/>
    ))}
  </Container>
}

export const ProfileData = ({ user: { username, tag, location, avatar, stats } }) => {
    return <ProfileDataStyle>
        <div>
            <Avatar
                src={avatar} width={100}
                alt="avatar"
            />
            <Discription>{username}</Discription>
            <Discription>{tag}</Discription>
            <Discription>{location}</Discription>
        </div>

        <List>
            <ListElement>
                <span>Followers <br/></span>
                <span>{stats.followers}</span>
            </ListElement>
            <ListElement>
                <span>Views <br/></span>
                <span>{stats.views}</span>
            </ListElement>
            <ListElement>
                <span>Likes <br/></span>
                <span>{stats.likes}</span>
            </ListElement>
        </List>
    </ProfileDataStyle>;
}