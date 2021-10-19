import React from 'react';
import rev1 from '../../images/reviews/review.jpg'
import rev2 from '../../images/reviews/review2.jpg'
import rev3 from '../../images/reviews/review3.jpg'

const Reviews = () => {
    return (
        <div>
            <h2><div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={rev1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-dark">
                            <h5>jonathon jee</h5>
                            <p>This is very helpful service center</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={rev2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-dark">
                            <h5>abraham kadery</h5>
                            <p>really it was outstanding help center</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={rev3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-dark">
                            <h5>cristina</h5>
                            <p>wow I love her all servce oppertunity I am very enjoy.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div></h2>
        </div>
    );
};

export default Reviews;