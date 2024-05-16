import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';

const FavouriteButton = ({ active, style }) => {
  const imgHeart = require('../assets/icon/icon_heart.png');
  const imgHeartEmpty = require('../assets/icon/icon_heart_empty.png');

  let [flag, setFlag] = useState(active);
  let toggleSwitch = () => setFlag(previousState => !previousState);
  let imgSrc = flag ? imgHeart : imgHeartEmpty;

  return (
    <Pressable onPress={() => toggleSwitch()}>
      <Image style={style} source={imgSrc} />
    </Pressable>
  );
};

export default FavouriteButton;
