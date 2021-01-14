import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {colors} from '../theme';
import Card from './Card';
import metrics from '../theme/metrics';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: metrics.margin,
    backgroundColor: colors.gray,
  },
  title: {
    color: colors.primaryGray,
    fontWeight: 'bold',
  },
});

const CardList = ({title, items}) => (
  <View>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      horizontal
      data={items}
      renderItem={Card}
    />
  </View>
);

export default CardList;
