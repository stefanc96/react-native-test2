import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {colors} from '../theme';
import Card from './Card';
import Row from './Row';
import StarBlue from '../../assets/images/ic_star_blue.svg';
import StarGray from '../../assets/images/ic_star_grey.svg';
import fonts from '../theme/fonts';

const StarCounter = ({rating, ratingCount}) => (
  <Row>
    {new Array(rating).fill(null).map((item, index) => {
      return (
        <View key={index}>
          <StarBlue height={12} width={12} />
        </View>
      );
    })}
    {new Array(5 - rating).fill(null).map((item, index) => {
      return (
        <View key={index}>
          <StarGray height={12} width={12} />
        </View>
      );
    })}
    <Text style={{color: '#4D88EC', marginLeft: 5, fontSize: fonts.size.small}}>
      {ratingCount}
    </Text>
  </Row>
);

export default StarCounter;
