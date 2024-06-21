/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import './QuotesCard.css'
import '../../../common/quotes.json'
import  '../../../pages/Quotes/Quotes';

import * as React from 'react';
import CardContent from '@mui/material/CardContent';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaHeart } from 'react-icons/fa';


const ExpandMore  = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

 // eslint-disable-next-line react/prop-types
 const QuotesCard = ({ image,date,text,author,description}) => {

  const [isActive, setIsActive] = React.useState(false)
  const [input, setInput] = React.useState(1)
  const [expanded, setExpanded] = React.useState(false);

  const colorHeart = () => {
    setIsActive(!isActive)
   }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="QuotesCard">
    <Card sx={{marginLeft:"20px",  maxWidth: 345 , maxHeight:"40rem"}}>
      <CardHeader
        avatar={
          <Avatar  aria-label="recipe">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FaHeart onClick={colorHeart} className={isActive ? "heartClick" : "heart"} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {author}
          </Typography>

          <Typography paragraph>
            {description} 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}

export default QuotesCard