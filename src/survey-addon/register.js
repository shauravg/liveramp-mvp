import React from 'react';
import addons from '@storybook/addons';
import { getForm } from './utils';

const styles = {
  surveysPanel: {
    margin: 10,
    fontFamily: 'Arial',
    fontSize: 14,
    color: '#444',
    width: '100%',
    overflow: 'auto',
  }
};

class Survey extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      survey: {}
    };

    this.getFormData = this.getFormData.bind(this);
  }

  getFormData(id) {
    return getForm(id)
      .then(response => {
        if(response.hasOwnProperty("data")) {
          this.setState({ survey: response.data });
        }
      })
      .catch(error => console.error(error));
  }

  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the notes and render it.
    //channel.on('kadira/survey/add_survey', this.addSurvey);
    this.getFormData('KFjOD3');
    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory((kind, story) => {
      this.getFormData('KFjOD3');
    });
  }

  render() {
    const { survey } = this.state;
    //const textAfterFormatted = text? text.trim().replace(/\n/g, '<br />') : "";
    console.log(survey);
    if(survey.hasOwnProperty("id"))
      return (
        <div style={styles.surveysPanel}>
          <a target="_blank" href={survey._links.display}>View Survey</a>
        </div>
      );
    else
      return ( null );
  }

  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if(this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel, api } = this.props;
    //channel.removeListener('kadira/notes/add_notes', this.onAddNotes);
  }
}

// Register the addon with a unique name.
addons.register('survey', (api) => {
  // Also need to set a unique name to the panel.
  addons.addPanel('survey/panel', {
    title: 'Survey',
    render: () => (
      <Survey channel={addons.getChannel()} api={api}/>
    ),
  })
})