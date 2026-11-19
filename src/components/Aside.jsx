import React from 'react'

const Aside = () => {
  const links=[1,2,3,4,5,6]
    return (
    <aside>
      <h2>Aside SECTION</h2>
        <ul>
            {links.map((link)=>(
              <li key={link}>link-{link}</li>
            ))}
        </ul>
    </aside>
  )
}

export default Aside