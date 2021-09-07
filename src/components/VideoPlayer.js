import React from "react";
import { useState, useRef } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import welcomeIntro from "../assets/welcomeIntro.mp4";

const VideoPlayer = ({}) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={welcomeIntro}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() => {
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync();
          }}
        />
      </View>
    </View>
  );
};

export default VideoPlayer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});