import {Component} from 'react'
import Country from '../Country'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capital extends Component {
  state = {country: countryAndCapitalsList[0].id}

  onViewCountry = event => {
    this.setState({country: event.target.value})
  }

  render() {
    const {country} = this.state
    console.log(country)
    const capitalCountry = countryAndCapitalsList.find(
      every => every.id === country,
    )
    const capital = capitalCountry.country

    return (
      <div className="Cont">
        <div className="content-cont">
          <h1>Countries and capitals</h1>

          <select
            value={country}
            id="capital"
            className="select"
            onChange={this.onViewCountry}
          >
            {countryAndCapitalsList.map(each => (
              <Country list={each} key={each.id} />
            ))}
          </select>
          <label htmlFor="capital">is capital of which country</label>
          <p>{capital}</p>
        </div>
      </div>
    )
  }
}

export default Capital
