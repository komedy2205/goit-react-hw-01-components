import { ProfileData } from "../ProfileData/ProfileData"

export const ProfileName = ({ user }) => {
  console.log(user)
  return <div className="profile">
    {user.map(user => (
      <ProfileData key={user.username} user={ user }/>
    ))}
  </div>
}