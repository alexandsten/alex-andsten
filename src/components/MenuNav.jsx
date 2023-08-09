import React from 'react'

const MenuNav = () => {
  const openWindow = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div>
      <ul id='mainMenu'>
        <li>Om mig</li>
        <li>Projekt</li>
        <li onClick={() => openWindow("https://www.linkedin.com/in/alex-andstén-47937116b")}>Linkedin</li>
        <li onClick={() => openWindow("https://github.com/alexandsten")}>Github</li>
      </ul>
    </div>
  )
}

export default MenuNav
