import { ProfileName } from './components/Profile/ProfileData/ProfileData';
import user from './components/Profile/UserData/user.json';
import { StatisticData } from './components/Statistics/StatisticData/StatisticData';
import data from './components/Statistics/Data/Data.json';
import { FriendListItem } from './components/FriendList/FriendList/FriendList';
import friend from './components/FriendList/Data/friends.json';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory/TransactionHistory';
import transaction from './components/TransactionHistory/Data/transactions.json';

function App() {
  return (
    <>
      <ProfileName user={user} />
      <StatisticData title="Upload stats" stats={data} />
      <FriendListItem friends={friend} />
      <TransactionHistory transactions={transaction} />
    </>
  );
}

export default App;
