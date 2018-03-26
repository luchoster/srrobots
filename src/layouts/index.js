import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  IconButton,
  Typography,
  Toolbar,
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import HomeIcon from 'material-ui-icons/Home'
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart'
import InfoIcon from 'material-ui-icons/Info'
import CameraIcon from 'material-ui-icons/PhotoCamera'
import MessageIcon from 'material-ui-icons/Message'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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
        <Helmet title="Señor Robots" />
        <AppBar position="static" className="app-bar d-lg-none">
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
          <ListSubheader component="div">Main Menu</ListSubheader>
          <Link className="color-1" to="/">
            <ListItem onTouchTap={this._closeDrawer} button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="home" />
            </ListItem>
          </Link>
          <Link className="color-4" to="/shop">
            <ListItem onTouchTap={this._closeDrawer} button>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="shop" />
            </ListItem>
          </Link>
          <Link className="color-3" to="/about">
            <ListItem onTouchTap={this._closeDrawer} button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="about us" />
            </ListItem>
          </Link>
          <Link className="color-2" to="/gallery">
            <ListItem onTouchTap={this._closeDrawer} button>
              <ListItemIcon>
                <CameraIcon />
              </ListItemIcon>
              <ListItemText primary="gallery" />
            </ListItem>
          </Link>
          <Link className="color-7" to="/contact">
            <ListItem onTouchTap={this._closeDrawer} button>
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText primary="contact us" />
            </ListItem>
          </Link>
        </Drawer>
        <Navbar />
        <div>{this.props.children()}</div>
        <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
