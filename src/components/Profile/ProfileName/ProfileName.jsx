import { ProfileData } from "../ProfileData/ProfileData";
import { Container } from '../App/App.styled'


export const ProfileName = ({ user }) => {
  return <Container>
    {user.map(user => (
      <ProfileData key={user.username} user={ user }/>
    ))}
  </Container>
}