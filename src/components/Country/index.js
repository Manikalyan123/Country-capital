import './index.css'

const Country = props => {
  const {list, onViewCountry} = props
  const {id, capitalDisplayText, country} = list

  const onView = () => {
    onViewCountry(country)
  }

  return <option>{capitalDisplayText}</option>
}

export default Country
