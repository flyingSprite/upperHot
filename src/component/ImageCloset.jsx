
import React, { Component, PropTypes } from 'react';

import { Card, CardMedia } from 'material-ui/Card';


class ImageCloset extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  }

  render() {
    const { src, width, height } = this.props;
    const styles = {
      margin: 4,
      width: width ? width : 236,
      minLeght: height ? height : 58
    };
    return (
      <Card style={styles}>
        <CardMedia><img src={src} /></CardMedia>
      </Card>
    );
  }
}

export default ImageCloset;
