import { useState } from 'react';
import AverageRating from './components/AverageRating';
import { ReviewContext } from './components/context/ReviewContext';
import Form from './components/Form';
import Header from './components/Header';
import ReviewList from './components/ReviewList';

function App() {
  const [reviews,setReviews] = useState([]);
  const [reviewToEdit,setReviewToEdit] = useState({
    review: null,
    updating: false
  });

  const addReview = (review) => {
    setReviews([review, ...reviews]);
  }

  const editReview = (review) => {
    setReviewToEdit({
      review,
      updating: true
    });
  }

  const updateReview = (review) => {
    setReviews(reviews.map(item => item.id === review.id ?
      {...item,...review} : item));
    setReviewToEdit({
      review: null,
      updating: false
    });
  }

  const removeReview = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
  }

  return (
    <ReviewContext.Provider value={
      {
        reviews, addReview, editReview,
        updateReview, reviewToEdit, removeReview
      }
    }>
    <div className='row my-4'>
      <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header bg-white">
              <Header />
            </div>
            <div className="card-body">
              <Form />
              <AverageRating />
              <ReviewList />
            </div>
          </div>
      </div>
    </div>
    </ReviewContext.Provider>
  );
}

export default App;
