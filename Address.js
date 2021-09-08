import React from 'react'

function Address({location, country, postal}) {
    return (
        <div>
            <p>I reside at {location} here in {country} with a postal code of {postal}</p>
        </div>
    )
}

export default Address
