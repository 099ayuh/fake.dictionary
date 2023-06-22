import React, { useState, useEffect } from 'react'
import './Content.css'
import ReactAudioPlayer from 'react-audio-player'
const Content = ({ data }) => {
  const [apiData, setApiData] = useState({
    word: "",
    meanings: [
      {
        definitions: [],
        synonyms: []
      }
    ],
    phonetics: []
  });
  const [notFoundmsg, setNotFoundMsg] = useState('')

  useEffect(() => {
    console.log('entered')
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + data;
    fetch(url)
      .then(resp => resp.json())
      .then((item) => {
        console.log(item)
        if (item[0] === undefined) {
          setNotFoundMsg(item);
        }
        setApiData(item[0])
      }).catch((err) => {
        console.log("some error occurred please try again!")
      });
  }, [data])

  // Note: add a no audio when no sounds are available
  return (
    <>
      {
        (apiData !== undefined) ?
          <div>
            <h1 className='Heading'>{apiData.word}</h1>
            <div>
              <div className='pronounce'>
                {apiData.phonetics.map(item => (
                  <>
                    {
                      (item.audio !== "" && item.text !== undefined) ?
                        <div className='inner-pronouce' key={item.text}>
                          <p className='pronounce-text'>{item.text}</p>
                          <ReactAudioPlayer
                            title={item.text}
                            src={item.audio}
                            controls
                          />
                        </div> : ''
                    }
                  </>
                ))}
              </div>
            </div>
            {apiData.meanings.map(element => (
              <div className='meaning-container' key={element.partOfSpeech}>
                <div className='partOfSpeech'>
                  <h3 className='colorBlind'>{element.partOfSpeech}</h3>
                  <span class="result-area__line-diviser"></span>
                </div>
                <div>
                  <p className='meaning'>Meaning</p>
                  <ul className='meaning-list'>
                    {element.definitions.map((index) => (
                      <li key={index.definition}>{index.definition}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div> :
          <div className='notFound'>
            <span className='notFound_icon'>☹️</span>
            <h3 className='notFound_description'>{notFoundmsg.title}</h3>
            <p className='notFound_message'>
              {notFoundmsg.message}
            </p>
            <a className='searchOnGoogle' href={'https://www.google.com/search?q=meaning of ' + data}>
              <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" /> Search
            </a>
          </div>
      }
    </>
  )
}

export default Content;
