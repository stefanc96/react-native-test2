import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const metrics = {
  width,
  margin: 15,
  dotRadius: 1.5,
  buttonRadius: 15,
  icon: {
    width: 15,
    height: 15,
  },
};

export default metrics;
