import { ProfileDataStyle } from './ProfileData.styled';
import { Avatar } from './ProfileData.styled';
import { Discription } from './ProfileData.styled';
import { List } from './ProfileData.styled'

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
            <li>
                <span>Followers </span>
                <span>{stats.followers}</span>
            </li>
            <li>
                <span>Views </span>
                <span>{stats.views}</span>
            </li>
            <li>
                <span>Likes </span>
                <span>{stats.likes}</span>
            </li>
        </List>
    </ProfileDataStyle>;
}