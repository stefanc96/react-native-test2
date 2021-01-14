import {StatusBar, Platform} from 'react-native';
import {colors} from '../theme';

if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor(colors.white);
  StatusBar.setBarStyle('dark-content');
}
