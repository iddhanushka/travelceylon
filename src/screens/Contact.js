import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Contact() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.contact}>
          <View style={styles.contactInfo}>
            <View style={styles.phone}>
              <Text style={styles.phoneTitle}>Telephone</Text>
              <Text style={styles.phoneNumber}>011234567</Text>
            </View>

            <View style={styles.email}>
              <Text style={styles.emailTitle}>Telephone</Text>
              <Text style={styles.emailAddress}>011234567</Text>
            </View>
          </View>

          <View style={styles.location}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7712582080185!2d79.84467107445963!3d6.917927593081715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25940c64e0475%3A0xab35aa2a9b50b482!2sSri%20Lanka%20Tourism%20Development%20Authority!5e0!3m2!1sen!2slk!4v1707985146286!5m2!1sen!2slk"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
