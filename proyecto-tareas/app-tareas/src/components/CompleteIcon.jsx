import Check from './Check'

function CompleteIcon({ completed, onComplete }) {
  return (
    <Check 
      type="check"
      color={completed ? 'green' : '#5f5454'}
      onClick={onComplete}
    />
  )
}

export { CompleteIcon }