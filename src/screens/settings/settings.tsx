import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import React, { ReactElement, useEffect, useState, useContext } from "react";
import styles from "./settings.styles";
import { GradientBackground, Text } from "@components";
import { colors } from "@utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SettingsContext, {
  useSettings,
  difficulties,
} from "@contexts/settings-context";

const Settings = (): ReactElement | null => {
  const { settings, saveSetting } = useSettings();

  if (!settings) {
    return null;
  }

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.field}>
          <Text style={styles.label}>Bot Difficulty</Text>
        </View>
        <View style={styles.choices}>
          {Object.keys(difficulties).map((level) => {
            return (
              <TouchableOpacity
                key={level}
                style={[
                  styles.choice,
                  {
                    backgroundColor:
                      settings.difficulty === level
                        ? colors.lightpurple
                        : colors.lightGreen,
                  },
                ]}
                onPress={() => {
                  saveSetting("difficulty", level);
                }}
              >
                <Text
                  style={[
                    styles.choiceText,
                    {
                      color: settings.difficulty === level ? "#fff" : "#000",
                    },
                  ]}
                >
                  {difficulties[level]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={[styles.field, styles.switch]}>
          <Text style={styles.label}>Sounds</Text>
          <Switch
            trackColor={{
              false: "#fff",
              true: colors.lightpurple,
            }}
            thumbColor={colors.lightGreen}
            ios_backgroundColor={colors.purple}
            value={settings.sounds}
            onValueChange={() => {
              saveSetting("sounds", !settings.sounds);
            }}
          />
        </View>

        <View style={[styles.field, styles.switch]}>
          <Text style={styles.label}>Haptics/Vibrations</Text>
          <Switch
            trackColor={{
              false: "#fff",
              true: colors.lightpurple,
            }}
            thumbColor={colors.lightGreen}
            ios_backgroundColor={colors.purple}
            value={settings.haptics}
            onValueChange={() => {
              saveSetting("haptics", !settings.haptics);
            }}
          />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default Settings;
