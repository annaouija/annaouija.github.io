import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import Typography from "@material-ui/core/Typography";

import { createMuiTheme } from '@material-ui/core/styles';
import createStyled from 'material-ui-render-props-styles/index';

const theme = createMuiTheme();

const Styled = createStyled({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  card: {
    margin: 10,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const AlbumCard = () => (
  <Styled>
    {({classes}) => (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary">
            Filter Information
          </Typography>
          <Typography component="p">
            This section will populate as filters are applied.
          </Typography>
        </CardContent>
        <CardActions>
          <iframe
            src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fannaouija&color=orange_white&size=32"
            width="32"
            height="32"
            scrolling="no"
            frameborder="no"
            allowtransparency="true"
          />
          <iframe
            src="https://open.spotify.com/follow/1/?uri=spotify:artist:6sFIWsNpZYqfjUpaCgueju&size=basic&theme=light&show-count=0"
            width="200"
            height="30"
            scrolling="no"
            frameborder="0"
            style={{border: 'none', overflow: 'hidden'}}
            allowtransparency="true"
          />
        </CardActions>
      </Card>
    )}
  </Styled>
);

export {AlbumCard};
