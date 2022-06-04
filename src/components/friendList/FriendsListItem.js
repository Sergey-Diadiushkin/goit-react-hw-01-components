import PropTypes from 'prop-types'
import s from './FriendsListItem.module.css'


const FriendListItem = ({ avatar, name, isOnline }) => {
    
    return (
<div className={s.item}>
    <span className={s.status}>{isOnline}</span>
    <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={s.name}>{name}</p>
</div>
    )
}
export default FriendListItem


FriendListItem.propTypes = {
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired
}