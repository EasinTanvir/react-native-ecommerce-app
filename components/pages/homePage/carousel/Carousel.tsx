import {
  beachImage,
  meditatingUnderTree,
  riverImage,
  treeImage,
  waterfall,
  yosemiteStars,
} from "@/constant";
import React, { useRef } from "react";
import { Dimensions, Image, View } from "react-native";

import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
const sliderImages = [
  beachImage,
  meditatingUnderTree,
  riverImage,
  treeImage,
  waterfall,
  yosemiteStars,
];

const CarouselSlider = () => {
  const width = Dimensions.get("window").width;

  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <View className="py-2">
      <Carousel
        autoPlay
        fixedDirection="positive"
        loop
        autoPlayInterval={3000}
        ref={ref}
        mode="parallax"
        width={width}
        height={width / 2}
        data={sliderImages}
        onProgressChange={progress}
        renderItem={({ item }) => (
          <View className="mx-2 h-60">
            <Image
              source={item}
              className="w-full h-full rounded-md"
              resizeMode="cover"
            />
          </View>
        )}
      />
      <Pagination.Basic
        progress={progress}
        data={sliderImages}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </View>
  );
};

export default CarouselSlider;
