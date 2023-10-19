import { Form, useLoaderData } from 'react-router-dom'

import { Button, List, ListItem, ListItemText, Typography } from '@mui/material'

const FIELDS = [
    { name: 'Titel', key: 'title' },
    { name: 'Body', key: 'body' },
  ]

function PostDetails() {
    const post = useLoaderData();
  return (
    <>
    <Typography variant='h4' gutterBottom>
        Post Details
    </Typography>
    {post && (
        <List>
            {FIELDS.map(field => (
                <ListItem key={field.key}>
                    <ListItemText primary={field.name} secondary={post[field.key]}/>
                </ListItem>
            ))}
        </List>
    )}
    <Form 
    method='DELETE'
    action='destroy'
    onSubmit={(event) => {
        if (!confirm('Please confirm that you want to delete this post.')) {
          event.preventDefault()
        }
      }}>
        <Button variant="contained" color="error" type="submit">Delete post</Button>
    </Form>
    </>
  )
}

export default PostDetails