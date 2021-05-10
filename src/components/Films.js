import React, { Fragment } from 'react';

const Films = ({link, children}) => {
   return(
    <Fragment>
        <h4><a href={link}>{children}</a></h4>
    </Fragment>
   );
};

export default Films;