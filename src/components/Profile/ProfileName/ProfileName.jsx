import { ProfileData } from "../ProfileData/ProfileData"

export const ProfileName = ({ user }) => {
  return <div>
    {user.map(user => (
      <ProfileData key={user.username} user={ user }/>
    ))}
  </div>
}