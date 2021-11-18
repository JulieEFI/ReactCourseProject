import React from 'react';

function UnitsCreatedInItem(props) {
    let {createdIn} = props;

    return (
             <div className="container-for-unique__card ">
                 <h2>{createdIn?.name}</h2>
                 <p>{createdIn?.age}</p>
                 <p>{createdIn?.expansion}</p>
                 <p>{createdIn?.armor}</p>
                 <p>{createdIn?.build_time}</p>
                 <p>{createdIn?.line_of_sight}</p>
                 <p>{createdIn?.special}</p>
                 <p>{createdIn?.cost[0]}</p>
                 <p>{createdIn?.hit_points}</p>
    </div>
    );
}

export default UnitsCreatedInItem;