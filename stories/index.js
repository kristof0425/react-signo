import React from 'react';

import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Signo from '../index';

storiesOf('react-signo 👨‍🎨', module)
  .addDecorator(centered)
  .add('with avatar and link', withInfo(``)(() => (
    <Signo
      avatarUrl="https://pbs.twimg.com/profile_images/871607917648257028/X3I1IJ0v_400x400.jpg"
      link="https://twitter.com/kristof0425"
      name="Kristóf Dombi"
    />)))
  .add('wo avatar, name and link', withInfo()(() => <Signo />))
  .add('with different color and fontFamily', withInfo()(() => (
    <Signo
      avatarUrl="https://pbs.twimg.com/profile_images/871607917648257028/X3I1IJ0v_400x400.jpg"
      link="https://twitter.com/kristof0425"
      name="Kristóf Dombi"
      color="grey"
      fontFamily="monospace"
    />
  )));
