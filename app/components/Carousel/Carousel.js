import React, { useState, useRef } from "react";
import { View, FlatList, Animated } from "react-native";
import CarouselItem from "./CarouselItem";

import styles from "./styles";

function Carousel(props) {
  const { photo, style, padding, height } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={Object.keys(photo)}
          renderItem={({ item }) => (
            <CarouselItem
              item={photo[item]}
              padding={padding}
              height={height}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(index) => index.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
    </View>
  );
}

export default Carousel;
