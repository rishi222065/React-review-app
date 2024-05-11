import React, { useContext } from 'react'
import { ReviewContext } from './context/ReviewContext';

export default function AverageRating() {
    const {reviews} = useContext(ReviewContext);

    const calculateReviewsAverage = () => {
        let average = reviews.reduce((acc,review) => {
            return acc + review.rating / reviews.length;
        },0);
        return average > 0 ? average.toFixed(1) : 0;
    }

    return (
        <div className='container my-4'>
            <div className="d-flex justify-content-between align-items-center">
                <h5>Reviews: 
                    {" "}
                    <span className="badge bg-dark rounded-pill">
                        {reviews.length}
                    </span>
                </h5>
                <h5>Average: 
                    {" "}
                    <span className="badge bg-warning text-dark rounded-pill">
                        {
                            calculateReviewsAverage()
                        }
                    </span>
                </h5>
            </div>
        </div>
    )
}
