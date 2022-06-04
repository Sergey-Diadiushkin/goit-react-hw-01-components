import Profile from './components/profile/Profile'
import user from './data/user.json'
import Statistics from 'components/statistics/Statistics';
import data from './data/data.json'
import FriendList from './components/friendList/FriendsList'
import friends from './data/friends.json'
import TransactionHistory from 'components/transactionHistory/TransactionHistory';
import transactions from './data/transactions.json'

export default function App() {
  return (
    <div>
      <FriendList
      friends={friends}
      />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
     <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    
      <TransactionHistory items={transactions} />

    </div>
  );
};

// [
//   { "id": "id-1", "label": ".docx", "percentage": 22 },
//   { "id": "id-2", "label": ".pdf", "percentage": 4 },
//   { "id": "id-3", "label": ".mp3", "percentage": 17 },
//   { "id": "id-4", "label": ".psd", "percentage": 47 },
//   { "id": "id-5", "label": ".pdf", "percentage": 10 }
// ]