import React from 'react'
import { ReactDOM } from 'react-dom'
import user from '../user.json'

// const user = {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// };


export function Painting() {
  return (<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class={user.avatar}
    />
    <p class={user.username}>Petra Marica</p>
    <p class={user.tag}>@pmarica</p>
    <p class={user.location}>Salvador, Brasil</p>
  </div>

  <ul class={user.stats}>
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>)
}


