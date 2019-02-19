import React from 'react'
import { Grid, Header, Icon, Item, List, Segment } from 'semantic-ui-react'

const UserDetailedDescription = ({ profile }) => {
  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header icon="smile" content="Γενικές πληροφορίες" />
            <p>
              Είμαι: <strong>{profile.occupation || ''}</strong>
            </p>
            <p>
              Καταγωγή από <strong>{profile.origin || ''}</strong>
            </p>
            <p>{profile.email}</p>
            <p>{profile.about}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header icon="heart outline" content="Ενδιαφέροντα" />
            {profile.interests ? (
              <List>
                {profile.interests &&
                  profile.interests.map((interest, index) => (
                    <Item key={index}>
                      <Icon name="heart" />
                      <Item.Content>{interest}</Item.Content>
                    </Item>
                  ))}
              </List>
            ) : (
              <p>Χωρίς ενδιαφέροντα</p>
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  )
}

export default UserDetailedDescription
