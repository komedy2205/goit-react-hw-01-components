import { ProfileName } from './components/Profile/ProfileData/ProfileData';
import user from './components/Profile/UserData/user.json';
import { StatisticData } from './components/Statistics/components/StatisticData/StatisticData';
import data from './components/Statistics/components/Data/Data.json';

function App() {
  return (
    <>
      <ProfileName user={user} />
      <StatisticData title="Upload stats" stats={data} />
    </>
  );
}

export default App;
