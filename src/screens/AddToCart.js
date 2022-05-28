import { StyleSheet, View, Platform, NativeModules, Dimensions, FlatList, Image, Animated, Pressable } from 'react-native'
import { colors } from '../theme/colors'
import { spaces } from '../theme/spaces'
import data from '../data/data'
import { useRef } from 'react'
import Pagination from '../components/Pagination'
import Text from '../components/text/text'
import Button from '../components/Button'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const { StatusBarManager } = NativeModules
const { width, height } = Dimensions.get('window')
const AddToCart = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const renderItem = ({ item }) => {
    return (
      <Image source={item.image} style={styles.imageStyle} />
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FlatList
          style={styles.list}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        />
        <Pagination data={data} scrollX={scrollX} />
        <View style={styles.headerBello} />
      </View>
      <View style={styles.content}>
        <Text preset='h3'>Boston Lettuce</Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10
        }}>
          <Text preset='h2'>1.10 </Text>
          <Text style={{ fontSize: 24 }}> € / piece</Text>
        </View>
        <Text style={{ fontSize: 17, marginTop: 5, color: '#06BE77' }}> ~ 150 gr / piece</Text>
        <Text preset='h4' style={{ marginVertical: 20 }}> Spain</Text>
        <Text style={{ lineHeight: 25 }}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 'auto', marginBottom: 70 }}>
          <Pressable style={{ width: '18%' }}><Button style={{
            backgroundColor: '#fff',
            borderColor: colors.textSecondary,
            borderWidth: 1,
          }}><Feather name="heart" size={24} color="#9586A8" /></Button></Pressable>
          <Pressable style={{ width: '75%' }}>
            <Button>
              <AntDesign name="shoppingcart" size={20} color="white" /> &nbsp; &nbsp;
              Add to cart</Button>
          </Pressable>
        </View>
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    height: (height / 3) + (Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0),
    backgroundColor: colors.purple,
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  },

  content: {
    height: ((height / 3) * 2) - (Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0),
    backgroundColor: colors.lite,
    marginHorizontal: spaces[5]
  },
  list: {
    height: (height / 3) - (Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0) - 20,
  },
  headerBello: {
    height: 40,
    width: '100%',
    backgroundColor: colors.lite,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30
  },
  imageStyle: {
    width: width,
    resizeMode: 'cover',
    height: (height / 3),
  }
})

export default AddToCart