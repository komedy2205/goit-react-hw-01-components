import { ProfileData } from './components/Profile/Profile';
import { StatisticData } from './components/Statistics/Statistic';
import { FriendListItem } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/statistic.json';
import friend from './data/friends.json';
import item from './data/transactions.json';

function App() {
  return (
    <>
      <ProfileData
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticData title="Upload stats" stats={data} />
      <FriendListItem friends={friend} />
      <TransactionHistory items={item} />
    </>
  );
}

export default App;
