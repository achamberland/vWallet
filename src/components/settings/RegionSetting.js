import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const locales = [
  { name: 'German', locale: 'de-DE', currency: 'EUR', symbol: '€' },
  { name: 'English', locale: 'en-US', currency: 'USD', symbol: '$' },
]

@inject('SettingsStore')
@observer
export default class RegionSetting extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  render() {
    return (
      <div className="row" style={{ height: '75px' }}>
        <div className="col-md-4">
          <font
            style={{
              color: 'white',
              fontFamily: 'AvenirNextLTW01Bold',
            }}
          >
            Locale settings:
          </font>
        </div>
        <div className="col-md-2">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
              caret
              style={{
                backgroundColor: 'transparent',
                borderColor: '#fff',
                boxShadow: 'none',
                margin: '0 auto',
              }}
            >
              {this.props.SettingsStore.getLocale}
            </DropdownToggle>
            <DropdownMenu>
              {locales.map(locale => (
                <DropdownItem
                  onClick={() => {
                    this.props.SettingsStore.setSettingOption({
                      key: 'locale',
                      value: locale.name,
                    })
                    this.props.SettingsStore.setSettingOption({
                      key: 'currency',
                      value: locale.currency,
                    })
                    this.props.SettingsStore.setSettingOption({
                      key: 'symbol',
                      value: locale.symbol,
                    })
                    this.props.SettingsStore.setSettingOption({
                      key: 'localeId',
                      value: locale.locale,
                    })
                  }}
                >
                  {locale.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>{' '}
        </div>
        <div className="col-md-6">
          <font
            style={{
              color: 'lightgray',
              fontFamily: 'AvenirNextLTW01Italic',
            }}
          >
            This switches locales not languages.<br /> For example does it
            switch currencies formats from USD to EUR
          </font>
        </div>
      </div>
    )
  }
}
