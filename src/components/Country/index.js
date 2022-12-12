import './index.css'

const Country = props => {
  const {list, onViewCountry} = props
  const {capitalDisplayText, country} = list

  const onView = () => {
    onViewCountry(country)
  }

  return (
    <li>
      <option onClick={onView}>{capitalDisplayText}</option>
    </li>
  )
}

export default Country
