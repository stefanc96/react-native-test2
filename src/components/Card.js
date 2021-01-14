import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {iconType} from '../fixtures';
import {colors, metrics} from '../theme';
import Row from './Row';
import StarCounter from './StarCounter';
import Dot from './Dot';
import fonts from '../theme/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: metrics.width * 0.85,
    margin: metrics.margin,
    shadowColor: '#0000003D',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 170,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  infoRow: {
    marginTop: -50,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },
  icon: {
    height: '60%',
    width: '60%',
  },
  alignCenter: {
    alignItems: 'center',
  },
  nameText: {
    fontSize: fonts.size.medium,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  container: {
    padding: 20,
  },
  availabilityText: {
    color: colors.fonts.secondaryGray,
    fontSize: fonts.size.small,
  },
  firstRow: {
    alignItems: 'flex-end',
  },
});

const Card = ({
  item: {
    availabilityStates,
    name,
    price,
    foodTypes,
    image,
    type,
    rating,
    ratingCount,
  },
}) => (
  <View style={styles.mainContainer}>
    <Image resizeMode={'cover'} source={image} style={styles.image} />
    <View style={styles.container}>
      <Row style={styles.infoRow}>
        <Row style={styles.firstRow}>
          <View
            style={[
              {
                borderColor: iconType[type].borderColor,
                backgroundColor: iconType[type].color,
              },
              styles.iconContainer,
            ]}>
            <Image
              resizeMode={'contain'}
              style={styles.icon}
              source={iconType[type].icon}
            />
          </View>
          {availabilityStates.map((item, index) => (
            <Row style={styles.alignCenter} key={index}>
              {index !== 0 && (
                <Dot color={colors.fonts.gray} radius={metrics.dotRadius} />
              )}
              <Text style={styles.availabilityText}>
                {'  '}
                {item}
                {'  '}
              </Text>
            </Row>
          ))}
        </Row>
        <StarCounter rating={rating} ratingCount={ratingCount} />
      </Row>
      <Text style={styles.nameText}>{name}</Text>
      <Row style={styles.alignCenter}>
        <Text style={{color: colors.fonts.primaryGray}}>{price} </Text>
        {foodTypes.map((item, index) => (
          <Row key={index} style={styles.alignCenter}>
            <Dot color={colors.fonts.gray} radius={metrics.dotRadius} />
            <Text style={{color: colors.fonts.primaryGray}}>
              {'  '}
              {item}
              {'  '}
            </Text>
          </Row>
        ))}
      </Row>
    </View>
  </View>
);

export default Card;
