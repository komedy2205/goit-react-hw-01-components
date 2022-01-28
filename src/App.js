import { ProfileName } from './components/Profile/ProfileName/ProfileName';
import user from './components/Profile/UserData/user.json';
import { Container } from './components/Profile/App/App.styled';
import { StatisticData } from './components/Statistics/components/StatisticData/StatisticData';
import data from './components/Statistics/components/Data/Data.json';

function App() {
  return (
    <>
      <Container>
        <ProfileName user={user} />
      </Container>
      <StatisticData data={data} />
    </>
  );
}

export default App;
