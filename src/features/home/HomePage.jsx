import React from 'react'
import HorizontalNonLinearAlternativeLabelStepper from './Steps'

const HomePage = ({ history }) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img
              className="ui image massive"
              src="/assets/logo.png"
              alt="logo"
            />
            <div className="content">PCology</div>
          </h1>
          <h2 className="ccontent">Η "επιστημονική" πλευρά των υπολογιστών</h2>
          <div
            onClick={() => history.push('/events')}
            className="ui huge white inverted button"
          >
            Ξεκινάμε
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
      <HorizontalNonLinearAlternativeLabelStepper />
    </div>
  )
}
export default HomePage
