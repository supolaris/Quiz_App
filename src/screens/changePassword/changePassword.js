import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Octicons from "react-native-vector-icons/Octicons"

const ChangePasswordStyles = () => {
  return (
    <View>
      <Text>Current password</Text>
      <TextInput
      placeholder='Enter a current password'
      />
      <Text>New password</Text>
      <TextInput
      placeholder='Enter a new password'
      />
      <Text>Confirm password</Text>
      <TextInput
      placeholder='Confirm a new password'
      />
      <View>
        <Text>Requirements</Text>
        <View
        style={{flexDirection: 'row'}}
        >
            <Octicons 
            name="dot-fill"
            size="25"
            />
            <Text>At least 8 characters</Text>
        </View>
        <View
        style={{flexDirection: 'row'}}
        >
            <Octicons 
            name="dot-fill"
            size="25"
            />
            <Text>Minimum 1 latin character</Text>
        </View>
        <View
        style={{flexDirection: 'row'}}
        >
            <Octicons 
            name="dot-fill"
            size="25"
            />
            <Text>Minimum 1 letter</Text>
        </View>
        <View
        style={{flexDirection: 'row'}}
        >
            <Octicons 
            name="dot-fill"
            size="25"
            />
            <Text>Minimum 1 special character ! @ # ?</Text>
        </View>
        <View
        style={{alignItems: 'flex-end'}}
        >
            <Text>Forgot Password?</Text>
        </View>
      </View>
    </View>
  )
}

export default ChangePasswordStyles;