import PropTypes from 'prop-types'
import FriendListItem from './FriendsListItem'
import s from './FriendsList.module.css'

 

const FriendList = ({friends}) => {
    return (
        <ul className={s.list}>
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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired
      
    }))
}

export default FriendList