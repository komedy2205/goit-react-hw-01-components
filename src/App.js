import { ProfileData } from './components/Profile/Profile';
import { StatisticData } from './components/Statistics/Statistic';
import { FriendListItem } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/statistic.json';
import friend from './data/friends.json';
import item from './data/transactions.json';

function App() {
  const { name, avatar, tag, location, stats } = user;
  return (
    <>
      <ProfileData
        name={name}
        avatar={avatar}
        tag={tag}
        location={location}
        stats={stats}
      />
      <StatisticData title="Upload stats" stats={data} />
      <FriendListItem friends={friend} />
      <TransactionHistory items={item} />
    </>
  );
}

export default App;
