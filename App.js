import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [image, setImage] = useState(null);

  // ฟังก์ชันสำหรับเลือกรูปภาพ
  const pickImage = async () => {
    // เรียกใช้งานตัวเลือกรูปภาพ
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,  // กำหนดให้เลือกรูปและวิดีโอ
      allowsEditing: true,
      aspect: [4, 3],  // กำหนดอัตราส่วนของรูปที่จะแก้ไขได้
      quality: 1,  // คุณภาพของรูปภาพ
    });

    console.log(result);

    // ถ้าไม่ยกเลิกการเลือกรูป
    if (!result.canceled) {
      setImage(result.assets[0].uri);  // ตั้งค่า URI ของรูปที่ถูกเลือก
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* ปุ่มสำหรับเรียกใช้ฟังก์ชันการเลือกรูป */}
      <Button title="เลือกรูปจากคลังรูปภาพ" onPress={pickImage} />
      {/* แสดงรูปที่ถูกเลือก */}
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
