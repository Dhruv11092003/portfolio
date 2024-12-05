import React from 'react'

const LinkContext=React.createContext({
    activeLink:'/',
    setLink:()=>{}
})

export default LinkContext