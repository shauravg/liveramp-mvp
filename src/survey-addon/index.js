import React from 'react';
import addons from '@storybook/addons';

export class WithSurvey extends React.Component {
  render() {
    const { children } = this.props;
    const channel = addons.getChannel();

    // send the notes to the channel.
    //channel.emit('kadira/notes/add_notes', notes);
    // return children elements.
    return children;
  }
}