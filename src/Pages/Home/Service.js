import React from 'react';

const Service = ({ s }) => {
    return (
        <div>

            <div class="card card-compact    shadow-xl    ">
                <figure ><img src={s.img} alt="{s.img}" style={{ 'height': '200px' }} /></figure>
                <div class="card-body text-lg ">
                    <h2 class="card-title font-bold">{s.name}</h2>
                    <p>{s.des}</p>
                    {/* <div class="card-actions justify-end">

                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Service;