import './App.css';
import { ProfileName } from './components/Profile/ProfileName/ProfileName';
import user from './components/Profile/UserData/user.json';
import { Container } from './components/App/App.styled';

function App() {
  return (
    <Container>
      <ProfileName user={user} />
    </Container>
  );
}

export default App;
