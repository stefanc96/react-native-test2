import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  View,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
} from 'react-native';

import {
  setFastFoodItems,
  setHealthyItems,
  setIsLoading,
  setPersonalItems,
} from './store/actions';
import {connect} from 'react-redux';
import {colors, metrics, strings} from './theme';
import IconBack from '../assets/images/ic_chevron_left.svg';
import IconSearch from '../assets/images/ic_search.svg';
import {
  forYouItems,
  healthyItems as heathItems,
  popularItems,
} from './fixtures';
import {Row, CardList} from './components';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  footer: {
    paddingHorizontal: metrics.margin,
  },
  searchContainer: {
    backgroundColor: colors.secondaryWhite,
    flex: 1,
    marginLeft: 20,
    alignItems: 'center',
    paddingLeft: 20,
    height: metrics.buttonRadius * 2,
    borderRadius: metrics.buttonRadius,
  },
  buttonBack: {
    backgroundColor: colors.secondaryWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.buttonRadius,
    width: metrics.buttonRadius * 2,
    height: metrics.buttonRadius * 2,
  },
  headerContainer: {
    marginHorizontal: metrics.margin,
    marginBottom: 10,
    marginTop: 20,
  },
  iconBack: {
    height: 20,
    width: 20,
  },
  textInput: {
    flex: 1,
    margin: 0,
    padding: 0,
    marginLeft: 10,
    textAlignVertical: 'center',
    color: colors.primaryGray,
  },
  buttonsContainer: {
    marginVertical: metrics.margin,
    backgroundColor: colors.white,
    height: 50,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: '#0000003D',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentTabText: {
    fontWeight: 'bold',
    color: colors.fonts.blue,
  },
  tabText: {
    fontWeight: 'normal',
    color: colors.black,
  },
});

const SafeView = Platform.OS === 'android' ? View : SafeAreaView;
const TabsEnum = {
  DELIVERY: 'Delivery',
  PICK_UP: 'Pick up',
};

class MainScreen extends React.PureComponent {
  state = {
    currentTab: TabsEnum.DELIVERY,
  };

  componentDidMount() {
    this.props.setPersonalItems(forYouItems);
    this.props.setFastFoodItems(popularItems);
    this.props.setHealthyItems(heathItems);
    this.props.setIsLoading(false);
  }

  onPressTab = tab => this.setState({currentTab: tab});

  render() {
    const {currentTab} = this.state;
    const {isLoading, fastFoodItems, personalItems, healthyItems} = this.props;

    return (
      <SafeView style={styles.container}>
        {isLoading ? (
          <ActivityIndicator color={colors.gray} />
        ) : (
          <ScrollView bounces={false}>
            <Row style={styles.headerContainer}>
              <View style={styles.buttonBack}>
                <IconBack
                  height={metrics.icon.height}
                  width={metrics.icon.width}
                  style={styles.iconBack}
                />
              </View>
              <Row style={styles.searchContainer}>
                <IconSearch
                  height={metrics.icon.height}
                  width={metrics.icon.width}
                />
                <TextInput
                  placeholderTextColor={colors.primaryGray}
                  placeholder={strings.search}
                  style={styles.textInput}
                />
              </Row>
            </Row>
            <CardList items={personalItems} title={strings.forYou} />
            <CardList items={fastFoodItems} title={strings.popularRightNow} />
            <CardList items={healthyItems} title={strings.healthyHangover} />
          </ScrollView>
        )}
        <View style={styles.footer}>
          <Row style={[styles.buttonsContainer, styles.shadow]}>
            <TouchableWithoutFeedback
              onPress={() => this.onPressTab(TabsEnum.DELIVERY)}>
              <View style={styles.button}>
                <Text
                  style={[
                    currentTab === TabsEnum.DELIVERY
                      ? styles.currentTabText
                      : styles.tabText,
                  ]}>
                  {TabsEnum.DELIVERY}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.onPressTab(TabsEnum.PICK_UP)}>
              <View style={styles.button}>
                <Text
                  style={[
                    currentTab === TabsEnum.PICK_UP
                      ? styles.currentTabText
                      : styles.tabText,
                  ]}>
                  {TabsEnum.PICK_UP}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Row>
        </View>
      </SafeView>
    );
  }
}

const mapStateToProps = state => {
  return {
    personalItems: state.personalItems,
    healthyItems: state.healthyItems,
    fastFoodItems: state.fastFoodItems,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  setPersonalItems,
  setHealthyItems,
  setFastFoodItems,
  setIsLoading,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
