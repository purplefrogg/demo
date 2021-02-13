import React, { Suspense } from 'react'
import Preloader from '../common/Preloader/preloader'

const withSuspense = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<Preloader />}>
                <Component {...props} />

            </Suspense>
        )
    }
}
export default withSuspense