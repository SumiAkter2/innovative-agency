import React from 'react';

const ReviewHome = ({ v }) => {
    return (
        <div>
            <div class="card w-full max-w-sm bg-base-100 shadow-xl my-6 border-4">
                <figure class="px-10 pt-10">
                    <img src={v.img} alt="man" class="rounded-xl " />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{v.name}</h2>
                    <p>{v.rating}</p>
                    <p>{v.Address}</p>
                    <p>{v.comment}</p>
                    <div class="card-actions">
                        {/* <button class="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewHome;