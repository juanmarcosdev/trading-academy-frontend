import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://image.flaticon.com/icons/png/512/950/950232.png"
                alt="study"
              />
              <Typography variant="h6" className={classes.title}>
                Estudia a tu ritmo
              </Typography>
              <Typography variant="h5" align="center">
                Te ofrecemos todo el material de la plataforma <i>on-demand</i> para que estudies donde quieras, cuando quieras.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://image.flaticon.com/icons/png/512/2910/2910234.png"
                alt="quality"
              />
              <Typography variant="h6" className={classes.title}>
                La más alta calidad
              </Typography>
              <Typography variant="h5" align="center">
                Todos los recursos que encuentras en nuestra academia son minuciosamente seleccionados y evaluados, para que aprendas de los mejores.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://image.flaticon.com/icons/png/512/1077/1077976.png"
                alt="money"
              />
              <Typography variant="h6" className={classes.title}>
                Hazlo realidad
              </Typography>
              <Typography variant="h5" align="center">
                Con los conocimientos que adquieres con nosotros, no tardarás en empezar a generar ganancias.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
