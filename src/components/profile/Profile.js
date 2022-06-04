import PropTypes from 'prop-types'
 import s from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats:{followers, views,likes} }) => {
   return (
     <div className={s.profile}>
       <div className={s.description}>
         <img
           src={avatar}
           alt="User avatar"
           className={s.avatar}
         />
         <p className={s.text}>{username}</p>
         <p className={s.text}>@{tag}</p>
         <p className={s.text}>{location}</p>
       </div>

       <ul className={s.list}>
         <li className={s.item}>
           <span className={s.label}>followers</span>
           <span className={s.quantity}>{followers}</span>
         </li>
         <li className={s.item}>
           <span className={s.label}>Views</span>
           <span className={s.quantity}>{views}</span>
         </li>
         <li className={s.item}>
           <span className={s.label}>Likes</span>
           <span className={s.quantity}>{likes}</span>
         </li>
       </ul>
     </div>
   );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number,
    Views: PropTypes.number,
    likes: PropTypes.number,
    
};

export default Profile;
