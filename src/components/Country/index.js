import './index.css'

const Country = props => {
  const {list} = props
  const {capitalDisplayText} = list

  return <option>{capitalDisplayText}</option>
}

export default Country
