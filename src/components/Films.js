import React, { Fragment } from 'react';

const Films = ({link, children}) => {
   return(
    <Fragment>
        <h4>{children}</h4>
        <p>{link}</p>
    </Fragment>
   );
};


export default Films;