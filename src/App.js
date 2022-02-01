import { ProfileName } from './components/Profile/ProfileData/ProfileData';
import user from './components/Profile/UserData/user.json';
import { StatisticData } from './components/Statistics/components/StatisticData/StatisticData';
import data from './components/Statistics/components/Data/Data.json';
import { FriendListItem } from './components/FriendList/FriendList/FriendList';
import friend from './components/FriendList/Data/friends.json';

function App() {
  return (
    <>
      <ProfileName user={user} />
      <StatisticData title="Upload stats" stats={data} />
      <FriendListItem friends={friend} />
    </>
  );
}

export default App;
