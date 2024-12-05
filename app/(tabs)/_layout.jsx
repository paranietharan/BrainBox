import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.tabIconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.icon, { tintColor: color || "#FFFFFF" }]}  // Make icons light
      />
      <Text
        style={[
          styles.tabLabel,
          { color: color || "#FFFFFF", fontWeight: focused ? "600" : "400" }, // Light text
        ]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {name}
      </Text>
    </View>
  );
};

// TabLayout Component
const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.Home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        {/* My Courses Tab */}
        <Tabs.Screen
          name="my-courses"
          options={{
            title: "My Courses",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.MyCourses}
                color={color}
                name="My Courses"
                focused={focused}
              />
            ),
          }}
        />

        {/* Explore Tab */}
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.Explore}
                color={color}
                name="Explore"
                focused={focused}
              />
            ),
          }}
        />

        {/* Profile Tab */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.Profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      {/* Status Bar Customization */}
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

// Styling for the components
const styles = {
  tabIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    gap: 5,
    padding: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  tabLabel: {
    fontSize: 10,
    textAlign: "center",
    width: 60,
  },
  tabBarStyle: {
    backgroundColor: "#161622",
    borderTopWidth: 0,
    borderTopColor: "#232533",
    height: 70,
  },
};

export default TabLayout;