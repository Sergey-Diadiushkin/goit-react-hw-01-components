import PropTypes from 'prop-types'


const FriendListItem = ({ avatar, name, isOnline }) => {
    
    return (
<div className="item">
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
</div>
    )
}
export default FriendListItem


FriendListItem.propTypes = {
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired
}