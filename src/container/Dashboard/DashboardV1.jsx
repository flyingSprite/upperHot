import React, { Component } from 'react';

import Masonry from 'react-masonry-component';


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
  'http://img.hb.aicdn.com/fc792e2e83ad913e129bdba0362742b973576285274ed-X5cyu4_fw236',
  'http://img.hb.aicdn.com/da58f38e39167e689057250fc817ba80d576f4ed33fb4-exRW2r_fw236',
  'http://img.hb.aicdn.com/721bdf10189d6fcb79b8690f1f0dc963eaa9de6b3462a-USnShk_fw236',
  'http://img.hb.aicdn.com/9fbdf51107432db02c1074d9afb9157a9b857cd6eac3-5rfMPF_fw236',
  'http://img.hb.aicdn.com/f2a6dafdc525c02eddbc55d89a55c447c96e302ec414-5pqJHa_fw236',
  'http://img.hb.aicdn.com/065cf612026b04b0a4164d0c05bd6df64a21cfb6c00f-LVC7g0_fw236',
  'http://img.hb.aicdn.com/6e1a62b44c7e0246e840c3314f2a274a0f069fe636b83-43kUOX_fw236',
  'http://img.hb.aicdn.com/04cb7519bdd85282a85f0ad086efe71241508cd5fec2-nmBrNs_fw236',
  'http://img.hb.aicdn.com/0d207f3e301a9e12daeb443c95a9e34927f14c2021dfc-b5wawu_fw236',
  'http://img.hb.aicdn.com/e9bcaa54c7eb357028f16fd6e0e361710efdc9df19a68-0xFuoC_fw236',
  'http://img.hb.aicdn.com/bb33926c72104c7f5da1ed571eb10fbb77cf65bb47a1e-lOWFoN_fw236',
  'http://img.hb.aicdn.com/70ad61784710abf2c6da99b7acdab0121a14ad4338e5f-1He5Gr_fw236',
  'http://img.hb.aicdn.com/354438486c986150d49e2268889df029e178988b40813-u2yTxi_fw236',
  'http://img.hb.aicdn.com/f6ae74cbfaac39273a03c671bd4184452fdce70d145f0-hdVhHA_fw236',
  'http://img.hb.aicdn.com/19e414c82d46219cc2d5deb461ca6f9f2470e0bd8a29d-6LdNEn_fw236',
  'http://img.hb.aicdn.com/ca69608fcebe6dc4e704f76719ccddf02181ef3a3186a-p4BVXc_fw236',
  'http://img.hb.aicdn.com/122f6b8b571d1446e066f2ed640492d6b26bb2ce3726e-xxdRNr_fw236',
  'http://img.hb.aicdn.com/7c38659191ce648a66cc424c79ac7b3333fe5ec235476-uS8Wy8_fw236',
  'http://img.hb.aicdn.com/2ee97be7cc4703efc0eb0141fa2a3d3b199ca2742a673-4PJgP8_fw236',
  'http://img.hb.aicdn.com/4b01533b625ad63a71ca8fa58c51ebf7b691faa614106-vY1hVs_fw236',
  'http://img.hb.aicdn.com/07f735cbe2a036850e6982ad5ed59b4aba91d6093ba1a-rjIbAT_fw236',
  'http://img.hb.aicdn.com/3fbbf9754f4b90fca1f57ade48a1bb848cece952217bf-docWjr_fw236',
  'http://img.hb.aicdn.com/9e606b9db0745674a9dfdc080c2db5dc970fb8b1301df-scK65U_fw236',
  'http://img.hb.aicdn.com/0b01fc2f814ea1e94320132fec3c5e9bb3b9073a38dcd-zQcHAt_fw236',
  'http://img.hb.aicdn.com/4dbc64e96d682d808547948a47c41d7f513e50f08ebb-uSNBx3_fw236',
  'http://img.hb.aicdn.com/dfe42e8def17c4d1b6f30771e241dbd35f5fa1b2238c5-ZwLbA1_fw236',
  'http://img.hb.aicdn.com/290f6a560eada6d25fe306ffbf5b8ef954016e1d2c1b2-n37rqZ_fw236',
  'http://img.hb.aicdn.com/483b96ca02579becaba0581093cc06c53768cb8934a43-FXsZqW_fw236',
  'http://img.hb.aicdn.com/85fc40c25a36db151274aad95e59d1a2b2c7e8b037061-WI5wNK_fw236',
  'http://img.hb.aicdn.com/4876731116c41c17b51e3246f09c1ee4070c129337ad5-Oxy74A_fw236',
  'http://img.hb.aicdn.com/1472f13e20c5b9909937094323a86e913b3c361a29ed7-APA9Jv_fw236'
];

class DefaultDashboard extends Component {
  
  render() {
    const masonryOptions = {
      transitionDuration: 0
    };
    var childElements = default_image.map(function(element){
      return (
        <li className="image-element-class">
          <img src={element} />
        </li>
      );
    });
    console.log('============>');
    return (
      <Masonry
        className={'my-gallery-class'} // default '' 
        elementType={'ul'} // default 'div' 
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
