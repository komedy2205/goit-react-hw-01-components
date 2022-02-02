import { ProfileData } from './components/Profile/Profile';
import user from './data/user.json';
import { StatisticData } from './components/Statistics/Statistic';
import data from './data/statistic.json';
import { FriendListItem } from './components/FriendList/FriendList';
import friend from './data/friends.json';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import item from './data/transactions.json';

function App() {
  return (
    <>
      <ProfileData
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
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
