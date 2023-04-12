import './index.css'
import {Component} from 'react'

class TabItem extends Component {
  render() {
    const {tabDetails, clickTabItem, isActive} = this.props
    const {displayText, tabId} = tabDetails
    const onClickTabItem = () => {
      clickTabItem(tabId)
    }

    const activeClassName = isActive ? 'active-tab-btn' : ''
    return (
      <li className="list">
        <button
          type="button"
          className={`button ${activeClassName}`}
          onClick={onClickTabItem}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
