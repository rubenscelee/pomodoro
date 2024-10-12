import React from 'react';

const PrincipalContainer = (props) => {
    return (
        <div className={"row"}>
            {props.children}
        </div>
    );
}

export default PrincipalContainer;
