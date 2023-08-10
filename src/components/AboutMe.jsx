import React from 'react'
import al3 from '../img/alex1.jpg'

const AboutMe = () => {
  return (
    <div id='aboutMe' className='para'>
      <img src={al3} alt="Alex" />
      <h2>Utbildning och kunskaper</h2>
    <p>
      Frontendutvecklare, JENSEN yrkeshögskola
      2022-pågående
      - Javascript, HTML, CSS, ramverk, react, react native, jsx, databashantering,
      arbete med API’er, grundläggande UX, testning, agilt projektmetodik
    </p>

    <p>
      Interaktiva medier och webbteknologier, Linnéuniversitetet
      2020-2021
      - Javascript, HTML, CSS, PHP, lärande av klient - server - databas,
      phpMyAdmin, SQL, MySQL
    </p>

    <p>
      3-årig IT/media gymnasieutbildning, John Bauer
      2008-2011
      -HTML, CSS, Adobe paketet, bild retuschering
    </p>
      
      <p>Mina färdigheter - javascript osv</p>
    </div>
  )
}

export default AboutMe
