import logo from './logo.svg';
import './App.css';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  icon: {
    marginRight: '20px'
  },
  button: {
    marginTop: '40px'
  },
  cardGrid: {
    padding: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px 0'
  }
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{marginTop: '100px'}}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecond" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, exercitationem.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                        See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                        Secondary Action
                    </Button>
                  </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {
              cards.map(() => (
                <Grid item key={cards} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        This is Heading
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus harum temporibus consequatur recusandae magni similique.
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
              ))
            }
              
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom>
            Footer
          </Typography>
          <Typography variant='subtitles1' align='center' color='textSecondary'>
            Some simple texts to give the footer a purpose!
          </Typography>
      </footer>
    </>
  );
}

export default App;
