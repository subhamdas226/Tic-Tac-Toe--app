import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import { useSettings } from "@contexts/settings-context";

type soundType = "pop1" | "pop2" | "win" | "draw" | "loss";

function useSound(): (sound: soundType) => void {
  const { settings, saveSetting } = useSettings();
  const popSoundRef = useRef<Audio.Sound | null>(null);
  const popSoundRef2 = useRef<Audio.Sound | null>(null);
  const winSoundRef = useRef<Audio.Sound | null>(null);
  const lostSoundRef = useRef<Audio.Sound | null>(null);
  const drawSoundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    //load our sounds

    const popSoundObject = new Audio.Sound();
    const popSoundObject2 = new Audio.Sound();
    const winSoundObject = new Audio.Sound();
    const lostSoundObject = new Audio.Sound();
    const drawSoundObject = new Audio.Sound();

    const loadSounds = async () => {
      await popSoundObject.loadAsync(require("@assets/pop_1.wav"));
      await popSoundObject2.loadAsync(require("@assets/pop_2.wav"));
      await winSoundObject.loadAsync(require("@assets/win.wav"));
      await lostSoundObject.loadAsync(require("@assets/loss.wav"));
      await drawSoundObject.loadAsync(require("@assets/draw.wav"));
      // popSoundObject.replayAsync()
      popSoundRef.current = popSoundObject;
      popSoundRef2.current = popSoundObject2;
      winSoundRef.current = winSoundObject;
      lostSoundRef.current = lostSoundObject;
      drawSoundRef.current = drawSoundObject;
    };
    loadSounds();

    return () => {
      //unload sounds
      popSoundObject && popSoundObject.unloadAsync();
      popSoundObject2 && popSoundObject2.unloadAsync();
      winSoundObject && winSoundObject.unloadAsync();
      lostSoundObject && lostSoundObject.unloadAsync();
      drawSoundObject && drawSoundObject.unloadAsync();
    };
  }, []);

  const playSound = async (sound: soundType): Promise<void> => {
    const soundmap = {
      pop1: popSoundRef,
      pop2: popSoundRef2,
      win: winSoundRef,
      loss: lostSoundRef,
      draw: drawSoundRef,
    };

    try {
      const status = await soundmap[sound].current?.getStatusAsync();
      status &&
        status.isLoaded &&
        settings?.sounds &&
        soundmap[sound].current?.replayAsync();

      if (settings?.haptics) {
        // soundmap[sound].current?.replayAsync();

        switch (sound) {
          case "pop1":
            break;

          case "pop2":
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            break;

          case "win":
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            break;

          case "loss":
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            break;

          case "draw":
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
            break;

          default:
            break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return playSound;
}

export default useSound;
