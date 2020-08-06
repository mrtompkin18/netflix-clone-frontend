import React, { Fragment } from 'react';
import { Skeleton } from "../styleds";

function RowSkeleton({ larg }) {

    return (
        <Fragment>
            <Skeleton width="160px" height="250px" mr="15px" />
            <Skeleton width="160px" height="250px" mr="15px" />
            <Skeleton width="160px" height="250px" mr="15px" />
            <Skeleton width="160px" height="250px" mr="15px" />
            <Skeleton width="160px" height="250px" mr="15px" />
            <Skeleton width="160px" height="250px" mr="15px" />
            <Skeleton width="160px" height="250px" mr="15px" />
            <Skeleton width="160px" height="250px" mr="15px" />
        </Fragment>
    );
}

export default RowSkeleton
