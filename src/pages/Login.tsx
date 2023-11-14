import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(null);
  const [formDataUser, setformDataUser] = React.useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (data: any) => {
    console.log(data);
    setFormData(data);
    try {
      // Send a request to the server
      const response = 
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  return (
    <div>
      <div>
        <Button onClick={handleOpen}>Login</Button>
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
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    login
                    
                  </Typography>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Box component="div"  sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            autoComplete="email"
                            {...register("email")}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            {...register("password")}
                          />
                        </Grid>
                      </Grid>
                      <Button
                      
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        login
                      </Button>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          {/* {formDataUser ? <h2> hi {formDataUser}</h2> : '' } */}

                          <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => {
                              onSubmit(formData);
                              navigate("/");  
                            }}
                          >
                            Home
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
    </div>
  );
};

export default Login;
