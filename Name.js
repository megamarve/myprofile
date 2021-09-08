import React from 'react'

function Name({firstName, lastName, middleName}) {
    return (
        <div>
            <h1>I am {firstName} {middleName} {lastName} a web developer from Germany</h1>
        </div>
    )
}

export default Name
