import React, { useState } from 'react';
import { ScrollView,Text } from 'react-native';
import Video from 'react-native-video';
import VideoComp from '../../components/VideoComp';

export default function VideoPage() {

  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0);


  return (
      <ScrollView key={1}>
        <VideoComp uri="https://wanmucos-1306106288.cos.ap-shanghai.myqcloud.com/picture%20material/b96d91ea228f14896720b5afb3c99487.mp4" />
      
      </ScrollView>
  )
}
