/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function AddBirthday() {
  const [isDatePicketVisible, setIsDatePicketVisible] = useState(true);

  const hideDatePicker=()=>{
    setIsDatePicketVisible(false);
  }

  const handlerConfirm=(date)=>{
  console.log(date);
  }
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Nombre"
          placeholderTextColor="#969696"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Apellido"
          placeholderTextColor="#969696"
        />
      </View>
      <DateTimePickerModal 
      isVisible={isDatePicketVisible}
      mode="date"
      onConfirm={handlerConfirm}
      onCancel={hideDatePicker}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    color: '#fff',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1e3040',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1e3040',
  },
});
