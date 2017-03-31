import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Masonry from 'react-masonry-component';

import ImageCloset from '../../component/ImageCloset';


const default_image = [
  'http://img.hb.aicdn.com/3058ff7398b8b725f436c6c7d56f60447468034d2347b-fGd8hd_fw236',
  'http://img.hb.aicdn.com/74cdfee9483c15e3d70a01e154ce657dc5b228e81c019-jRx8qV_fw236',
  'http://img.hb.aicdn.com/2849f46dfbeebb19ca24cffbab8988742064a49f24453-UueADH_fw236',
  'http://img.hb.aicdn.com/e845b72c57e251edd9e0997a132ba14316fd68801754f-6f7PDR_fw236',
  'http://img.hb.aicdn.com/8230da6bb681b3d0d8b4e2680e57ef48d5dfaea01b540-v8vb6s_fw236',
  'http://img.hb.aicdn.com/61e2ea33f8d6d100c90e979e340ed4c03d0a3fff23da8-xZNYoq_fw236',
  'http://img.hb.aicdn.com/36cbb813b8399e9d7e2d08afd960a965f722764a101b3-Hs5QsC_fw236',
  'http://img.hb.aicdn.com/736f4e9dcdbf5e75629ea2d9a77dfacb181da9603d2f4-Ysay1Q_fw236',
  'http://img.hb.aicdn.com/9a74f36eb4481a33d7c8fdd1b63c97bb113ce1f646e88-RP45gs_fw236',
  'http://img.hb.aicdn.com/5e1663765adf3b9f1df4c31dd3f76cc2e6f9011ffb10-MoiTVY_fw236',
  'http://img.hb.aicdn.com/c47e987d2d57d13ca6a436eac3dbf34326ed11e92a561-AsSXTd_fw236',
  'http://img.hb.aicdn.com/4087c890d5cc532701c9037f1ad1d59ae3b4cddb31a02-tzP1cC_fw236',
  'http://img.hb.aicdn.com/ca4bc8edbb06aa3a5ded2444cb673dc00ae8eca71cef5-K2pkpz_fw236',
  'http://img.hb.aicdn.com/3ad9c013ccc940ebc2ba8bed340dc69464441e7b23a41-mTMhL6_fw236',
  'http://img.hb.aicdn.com/35a9100260e8e8edada6cd5219d451f738e1091c2f78d-S1bvx0_fw236',
  'http://img.hb.aicdn.com/e5d8b4ba22c02e061da8b3132dc44bc5b393a1e29979-3luO8b_fw236',
  'http://img.hb.aicdn.com/0199610c8f245830af1e709cd7014e1877979490377ca-inn5N3_fw236',
  'http://img.hb.aicdn.com/5b5721e12d42406d4e9f0abff03f67376e94576b145e0-zslYQ5_fw236',
  'http://img.hb.aicdn.com/abce3ddd2542206e77eb1397848be4b17d969c95e5dd-PbNzC8_fw236',
  'http://img.hb.aicdn.com/fc792e2e83ad913e129bdba0362742b973576285274ed-X5cyu4_fw236'
];

class DefaultDashboard extends Component {

  constructor() {
    super();
    this.state = {
      imageClosets: []
    };
  }

  componentWillMount() {
    this.setState({imageClosets: default_image});
  }
  
  render() {
    const masonryOptions = {
    };
    var childElements = this.state.imageClosets.map(function(element, index){
      return (<ImageCloset key={index} src={element} />);
    });
    return (
      <Masonry
        elementType={'div'} // default 'div' 
        options={masonryOptions} // default {} 
        disableImagesLoaded={false} // default false 
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false 
      >
        {childElements}
      </Masonry>
    );
  }
}

export default DefaultDashboard;
