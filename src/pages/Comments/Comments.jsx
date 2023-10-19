import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link, useLoaderData } from 'react-router-dom'

const Comments = () => {

  const comments = useLoaderData();

    return (
      <>
      <Typography variant="h4" gutterBottom>
        Comments
      </Typography>
      <List>
      {comments.map(coment => (
        <ListItem key={coment.id} alignItems="flex-start">
          <ListItemText primary={coment.name} secondary={
                <>
                  <Typography variant="subtitle1">{coment.email}</Typography>
                  {coment.body}
                </>
              }/>
        </ListItem>
      ))}
      </List>
      </>
    )
  }
  
  export { Comments }
  