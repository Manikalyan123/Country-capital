import './index.css'

const Country = props => {
  const {list} = props
  const {id, capitalDisplayText} = list

  return <option value={id}>{capitalDisplayText}</option>
}

export default Country
