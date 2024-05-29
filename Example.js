// Example.js
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Example({ navigation }) {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <ScrollView>
        <View style={styles.container}>
          {/* Profile Section */}
          <View style={styles.profile}>
            <Text style={styles.profileName}>John Daniel</Text>
            <Text style={styles.profileProfession}>Barber Clients</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
              <View style={styles.profileAction}>
                <Text style={styles.profileActionText}>Edit profile information</Text>
                <FeatherIcon color="#fff" name="edit" size={16} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Notification Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notifications</Text>
            <View style={styles.sectionBody}>
              <View style={styles.rowWrapper}>
                <View style={styles.row}>
                  <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                    <FeatherIcon color="#fff" name="at-sign" size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Email Notifications</Text>
                  <View style={styles.rowSpacer} />
                  <Switch
                    onValueChange={(emailNotifications) =>
                      setForm({ ...form, emailNotifications })
                    }
                    value={form.emailNotifications}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Preferences Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>
            <View style={styles.sectionBody}>
              {/* Language */}
              <TouchableOpacity onPress={() => navigation.navigate('Language')} style={styles.row}>
                <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                  <FeatherIcon color="#fff" name="globe" size={20} />
                </View>
                <Text style={styles.rowLabel}>Language</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>English</Text>
                <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
              </TouchableOpacity>

              {/* Theme */}
              <View style={styles.rowWrapper}>
                <View style={styles.row}>
                  <View style={[styles.rowIcon, { backgroundColor: '#007AFF' }]}>
                    <FeatherIcon color="#fff" name="moon" size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Theme</Text>
                  <View style={styles.rowSpacer} />
      
