import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

const LikeSection = (props) => {
  const { likePost, post } = props

  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    if (!liked) {
      likePost(post.id)
      setLiked(() => true)
    }
  }

  return (
    <div>
      <div className='like-section' key='likes-icons-container'>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: liked ? 'red' : 'inherit', cursor: liked ? null : 'pointer' }}
            onClick={handleClick}
          />
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className='like-number'>{post.likes} likes</p>
    </div>
  )
}

export default LikeSection
