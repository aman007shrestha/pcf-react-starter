import * as React from 'react';
import { Label } from '@fluentui/react/lib/Label';
import {now} from 'moment';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
  },
})

export interface IHelloWorldProps {
  name?: string;
}

export const HelloWorld: React.FC<IHelloWorldProps> = (props) => {
  return (
    <Label>
      moment:
      {now().toLocaleString()}
    {props.name}
  </Label>
  );
};

