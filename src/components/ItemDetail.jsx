/* eslint-disable react/prop-types */
import ItemCount from './ItemCount'

function ItemDetail ({ detail }) {
  return (
    <div>
      <h2>{detail?.name}</h2>
      <img src={detail?.image} style={{ width: 300 }} />
      <p>{detail?.description}</p>
      <ItemCount detail={detail} />
    </div>
  )
}

export default ItemDetail
