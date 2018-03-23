import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import {
  AppBar,
  Drawer,
  ListItem,
  IconButton,
  Typography,
  Toolbar,
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import Navbar from '../components/Navbar'
import ReactTouchTap from 'react-tap-event-plugin'
import './all.sass'

ReactTouchTap()

class TemplateWrapper extends React.Component {
  state = {
    open: false,
  }
  _handleToggle = e => {
    e.preventDefault()
    this.setState({ open: !this.state.open })
  }
  _closeDrawer = () => this.setState({ open: false })
  render() {
    return (
      <div>
        <Helmet title="Home | Sr. Robots" />
        <AppBar position="fixed" className="app-bar d-lg-none">
          <Toolbar>
            <IconButton
              onTouchTap={this._handleToggle}
              color="primary"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" style={{ flex: 1 }}>
              Sr. Robots
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this._handleToggle}>
          <Link className="color-1" to="/">
            <ListItem onTouchTap={this._closeDrawer}>home</ListItem>
          </Link>
          <Link className="color-4" to="/shop">
            <ListItem onTouchTap={this._closeDrawer}>shop</ListItem>
          </Link>
          <Link className="color-3" to="/about">
            <ListItem onTouchTap={this._closeDrawer}>about us</ListItem>
          </Link>
          <Link className="color-2" to="/gallery">
            <ListItem onTouchTap={this._closeDrawer}>gallery</ListItem>
          </Link>
          <Link className="color-7" to="/contact">
            <ListItem onTouchTap={this._closeDrawer}>contact us</ListItem>
          </Link>
        </Drawer>
        <Navbar />
        <div>{this.props.children()}</div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
