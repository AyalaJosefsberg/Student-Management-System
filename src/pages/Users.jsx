import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
export function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/users')
             .then(res => setUsers(res.data.users))
            .catch(error => {
                console.error('Error fetching users:', error);
            });
        }, [])
    
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        כל המשתמשים
      </Typography>

      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {user.firstName} {user.lastName} {user.age}  {user.phone} {user.color}
                </Typography>
                <Typography color="text.secondary">{user.email}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}