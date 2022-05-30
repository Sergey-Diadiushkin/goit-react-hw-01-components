import PropTypes from 'prop-types'
import FriendListItem from './FriendsListItem'
import friends from '../../friends.json'
 

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
      </li>
  ))}
</ul>
    )
}

export default FriendList