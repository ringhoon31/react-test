import React from 'react'

const Header = () => {
    const menus = [
        { id: 1, name: 'page1' },
        { id: 2, name: 'page2' },
        { id: 3, name: 'page3' },
        { id: 4, name: 'page4' },
        { id: 5, name: 'page5' },
    ]
    return (
        <header>
            <h1>header section</h1>
            <nav>
                <ul>
                    {menus.map((menu, i) => (
                        <li key={menu.id}>
                            <a href="#">
                                {menu.name}
                                </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header