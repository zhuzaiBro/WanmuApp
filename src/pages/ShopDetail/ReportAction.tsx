import React from 'react';
import {Actionsheet} from 'native-base';

export default function ReportAction({isOpen, onClose}) {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content >
            <Actionsheet.Item>
                举报
            </Actionsheet.Item>
            <Actionsheet.Item>
                取消
            </Actionsheet.Item>
        </Actionsheet.Content>
    </Actionsheet>
  )
}
