import {
  Typography,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Grid,
  Container,
  CssBaseline,
  CardActions,
  CardMedia,
  Button,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    padding: "20px",
  },
  icon: {
    marginRight: "15px",
  },
  button: {
    marginTop: "30px",
  },
  cardGrid: {
    padding: "20px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  cardMedia: {
    paddingTop: "59.25%",
  },

  cardContent: {
    flexGrow: 1,
  },
  footer:{
    padding:"50px 0"
  }
});
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              align="center"
              variant="h3"
              color="textPrimary"
              gutterBottom
            >
              Photo Albom
            </Typography>
            <Typography
              align="center"
              variant="h5"
              color="textSecondary"
              paragraph
            >
              This is a Photo Albom and I am trying to make this sentence as
              long as possible.So we can see how does it look like on the
              screen.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card.You can use this section to describe
                      the content.
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
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography
          align="center"
          variant="h5"
          color="textPrimary"
          gutterBottom
        >
          Footer
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          color="textSecondary"
          paragraph
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi?
        </Typography>
      </footer>
    </>
  );
}

export default App;
