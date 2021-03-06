import DateFormatter from '../components/date-formatter'
import ShowTags from '../components/show-tags'
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles({
  card: {
    flexGrow: 1,
  },
  cardAction: {
    height:200,
  },
});

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
})
  {
  const href = "/posts/" + [slug]
  const classes = useStyles();

  return (
      <Grid item xs={12} md={6}>
        <Card className={classes.card}>
          <CardActionArea className={classes.cardAction} component="a" href={href}>
            <CardContent>
              <Typography gutterBottom variant="subtitle1" color="textSecondary">
                <DateFormatter dateString={date} />
              </Typography>
              <Typography gutterBottom component="h2" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" paragraph>
                {excerpt}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ShowTags tags={tags} />   
          </CardActions>
        </Card>
      </Grid>
  )
}