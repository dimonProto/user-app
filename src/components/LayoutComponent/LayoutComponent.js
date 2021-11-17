import React from "react";

const LayoutComponent = (props) => {
    const{children} = props

    return (
        <div className='app-wrapper'>
            {children}
        </div>

    )
}

export default LayoutComponent