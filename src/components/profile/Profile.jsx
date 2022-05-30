 import PropTypes from 'prop-types'

const Profile = ({ username, tag, location, avatar, stats }) => {
   return (
     <div class="profile">
       <div className="description">
         <img
           src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
           alt="User avatar"
           className={avatar}
         />
         <p className="name">{username}</p>
         <p className="tag">{tag}</p>
         <p className='location'>{location}</p>
       </div>

       <ul className='stats'>
         <li>
           <span className="label">followers</span>
           <span className="quantity">{stats.followers}</span>
         </li>
         <li>
           <span className="label">Views</span>
           <span className="quantity">{stats.views}</span>
         </li>
         <li>
           <span className="label">Likes</span>
           <span className="quantity">{stats.likes}</span>
         </li>
       </ul>
     </div>
   );
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    // stats: PropTypes.string
};

export default Profile;
