import React from "react"
import PropTypes from "prop-types"
class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        Message: {this.props.message}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  message: PropTypes.string
};
export default Home
