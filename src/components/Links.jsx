import React from 'react'

const MenuNav = () => {
  const openWindow = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div>
      <h3>Linkedin och github</h3>
      <ul id='mainLinks'>
        <li onClick={() => openWindow("https://www.linkedin.com/in/alex-andstén-47937116b")}>Linkedin</li>
        <li onClick={() => openWindow("https://github.com/alexandsten")}>Github</li>
      </ul>
    </div>
  )
}

export default MenuNav
