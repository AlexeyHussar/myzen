import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const Story = ({ title, text, editStory }) => (
  <div className='story'>
    <Card className='card'>
      <CardHeader
        title={ title }
        actAsExpander={ true }
        showExpandableButton={ true }
      />
      <CardText expandable={ true } className='cardText'>
        { text }
      </CardText>
      <CardActions>
        <FlatButton label='Edit' onClick={ editStory } />
        <FlatButton label='Another one' />
      </CardActions>
    </Card>
  </div>
);