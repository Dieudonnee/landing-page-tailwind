import React from 'react'


const NavLinks = () => {
    const links = [
        {name:"Men"},
        {name:"women"},
        {name:"kids"},
        {name:"All"},
      ]

  return (
      <div>
            {links.map((link) => (
              <div>
                <div>
                <li>{link.name }</li>
                </div>
              </div>
            ))}
    </div>
  )
}

export default NavLinks