/* eslint-disable no-unused-vars */
import React from 'react'
import { RevolvingDot } from 'react-loader-spinner'

export default function Loading() {
    return <div className="d-flex justify-content-center align-items-center">
        <RevolvingDot
        visible={true}
        height="100"
        width="100"
        color="green"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div> 
}
