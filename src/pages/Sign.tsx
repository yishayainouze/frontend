import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SignUpModal() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data:any) => {
    console.log(data);
    setFormData(data);
    console.log(formData);
    

  };

  return (
    <div>
      <Button onClick={handleOpen}>Sign Up</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ThemeProvider theme={createTheme()}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="given-name"
                          // name="userName"
                          required
                          fullWidth
                          id="userName"
                          label="User Name"
                          autoFocus
                          {...register('userName')}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          // name="email"
                          autoComplete="email"
                          {...register('email')}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          // name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          {...register('password')}
                        />
                      </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        {/* <Link href="/Login" variant="body2">
                          Already have an account? Sign in
                        </Link> */}
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} 
                        onClick={() => navigate("/")}>Home
                   </Button>

                      </Grid>
                    </Grid>
                  </Box>
                </form>
              </Box>
            </Container>
          </ThemeProvider>
        </Box>
      </Modal>
    
    </div>
  );
}
