import { ProfileDataStyle } from './ProfileData.styled'

export const ProfileData = ({ user: { username, tag, location, avatar, stats } }) => {
    return <div>
        <div>
            <img
                src={avatar} width={100}
                alt="avatar"
            />
            <p>{username}</p>
            <p>{tag}</p>
            <p>{location}</p>
        </div>

        <ul>
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
        </ul>
    </div>;
}