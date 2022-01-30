import { ProfileName } from './components/Profile/ProfileName/ProfileName';
import user from './components/Profile/UserData/user.json';
import { StatisticData } from './components/Statistics/components/StatisticData/StatisticData';
import data from './components/Statistics/components/Data/Data.json';

function App() {
  return (
    <>
      <ProfileName user={user} />
      <StatisticData data={data} />
    </>
  );
}

export default App;
