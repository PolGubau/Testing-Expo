import { Link } from 'expo-router';
import React from 'react'
import { Image, StyleSheet, Pressable} from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 30,
    marginRight: 10,
    borderRadius: 50,
    height: 30,
  },
 
});
 const UserAvatarButton = () => {
  return (
      <Link href="/modal" asChild>
               <Pressable>
                {({ pressed }) => (    
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://www.thispersondoesnotexist.com',
        }}
      />
                 )}
              </Pressable>
            </Link>
  )
}

export default UserAvatarButton