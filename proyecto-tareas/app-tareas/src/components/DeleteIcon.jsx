import Delet from './Delet'

function DeleteIcon({ onDelete }) {
  return (
    <Delet
        type="delete"
        color= '#000000'
        onClick={onDelete}
    />
  )
}

export { DeleteIcon }