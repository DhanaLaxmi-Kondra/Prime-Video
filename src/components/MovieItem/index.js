import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {eachMovieDetails} = props
  const {thumbnailUrl, videoUrl, categoryId} = eachMovieDetails
  console.log(eachMovieDetails)

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" key={categoryId} />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div>
              <div className="responsive-container">
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
