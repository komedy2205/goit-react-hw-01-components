import { ProfileDataStyle, ListElement, Avatar, Discription, List } from './Profile.styled';
// import { Container } from './Profile.styled'


export const ProfileData = ({ avatar, username, tag, location, stats }) => {
    return <ProfileDataStyle>
        <div>
            <Avatar
                src={avatar} width={100}
                alt="avatar"
            />
            <Discription>{username}</Discription>
            <Discription>@{tag}</Discription>
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