import './index.css'

const OptImageCard = props => {
  const {eachOne, onClickAnsImg} = props
  const {thumbnailUrl, id} = eachOne
  const onClickOnIm = () => {
    onClickAnsImg(id)
  }
  return (
    <li className="opt-thumbnail-list-item">
      <button type="button" onClick={onClickOnIm} className="optimbtn">
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-image" />
      </button>
    </li>
  )
}

export default OptImageCard
