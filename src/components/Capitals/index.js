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
  state = {country: 'Nepal'}

  onViewCountry = countrys => {
    this.setState({country: countrys})
  }

  render() {
    const {country} = this.state
    return (
      <div className="Cont">
        <div className="content-cont">
          <h1>Countries and capitals</h1>

          <select id="capital" className="select" onChange={this.onViewCountry}>
            {countryAndCapitalsList.map(each => (
              <Country
                list={each}
                key={each.id}
                onViewCountry={this.onViewCountry}
              />
            ))}
          </select>
          <label htmlFor="capital">is capital of which country</label>

          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capital
