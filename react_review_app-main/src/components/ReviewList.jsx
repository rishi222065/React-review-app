import React, { useContext } from 'react'
import { ReviewContext } from './context/ReviewContext';
import ListItem from './ListItem'

export default function ReviewList() {
  const {reviews} = useContext(ReviewContext);

  return (
    <ul className='mt-4 list-group'>
        {
            reviews.map(review => <ListItem  
                key={review.id} 
                review={review} 
            />)
        }
    </ul>
  )
}
