import './index.css'
import {Component} from 'react'

class AppItem extends Component {
  render() {
    const {appDetails} = this.props
    const {appName, imageUrl} = appDetails

    return (
      <li className="app-list">
        <img className="image" src={imageUrl} alt={appName} />
        <p className="app-heading">{appName}</p>
      </li>
    )
  }
}
export default AppItem
