// Node Modules
import Link from "next/link";
import { withStyles } from "@material-ui/core/styles";

// Local Components
import Header from "../components/Header";
import Panel from "../components/Panel";
import ContactForm from "../components/forms/ContactForm";
import Footer from "../components/Footer";
import Results from "../components/Results";
import CardCustom from "../components/CardCustom";
import Program from "../components/Program";
import ButtonCustom from "../components/ButtonCustom";

// Material UI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

// Local Assets
import mainGraphic from "../static/images/sat-main-graphic.svg";
import ruler from "../static/images/ruler.svg";
import curve from "../static/images/curve.svg";
import triangle from "../static/images/triangle-icon.svg";
import net from "../static/images/net.svg";
import check from "../static/images/check-icon.svg";
import online from "../static/images/online-course.png";
import chevronDown from "../static/images/chevron-down.svg";
import tutor from "../static/images/1-on-1-tutoring.jpg";
import bootcamp from "../static/images/bootcamp.png";
import * as colors from "../components/common/colors";

//  Style Overrides
const styles = theme => ({
  mainGraphic: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  mainTextContainer: {
    paddingRight: "0px",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      paddingRight: "30px"
    },
    "& h2": {
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        textAlign: "left"
      }
    },
    "& h5": {
      lineHeight: 3,
      fontSize: "20px",
      [theme.breakpoints.up("sm")]: {
        fontSize: "24px"
      }
    }
  },
  curve: {
    backgroundImage: `url(${curve})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    paddingBottom: "180px",
    paddingTop: "50px"
  },
  topRulerText: {
    padding: "0px 20px"
  },
  ruler: {
    display: "block",
    maxWidth: "2000px",
    margin: "20px auto"
  },
  chevronDown: {
    width: "80px",
    margin: "40px 0px"
  },
  copyContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    paddingBottom: "250px"
  },
  copy: {
    marginBottom: "30px"
  },
  copyCard: {
    zIndex: "5",
    padding: "40px",
    position: "relative",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  net: {
    position: "absolute",
    zIndex: "-1",
    top: "0px",
    transform: "rotateX(180deg)",
    left: "-800px",
    width: "1500px"
  },
  programsPanel: {
    marginBottom: "100px",
    color: "white",
    paddingBottom: "0px",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "50px"
    }
  },
  programImg: {
    display: "block",
    width: "100%"
  },
  programContainer: {
    paddingRight: "0px",
    marginBottom: "30px",
    [theme.breakpoints.up("md")]: {
      paddingRight: "30px",
      marginBottom: "0px"
    },
    "& h3": {
      marginBottom: "10px"
    }
  },
  programContainerMiddle: {
    paddingLeft: "0px",
    marginBottom: "30px",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "30px",
      marginBottom: "0px"
    },
    "& h3": {
      marginBottom: "10px"
    }
  },
  programWrapperMiddle: {
    marginTop: "100px",
    marginBottom: "100px",
    flexDirection: "column-reverse",
    alignContent: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      marginTop: "40px",
      marginBottom: "40px"
    }
  },
  programWrapper: {
    flexDirection: "column",
    alignContent: "center",
    marginTop: "20px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },
  programAdWrapper: {
    marginTop: "20px",
    display: "block",
    [theme.breakpoints.up(1100)]: {
      display: "flex",
      flexDirection: "row"
    }
  },
  checkoutPanel: {
    marginBottom: "100px"
  },
  programImgContainer: {
    borderRadius: "10px"
  }
});

const Sat = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Header backgroundColor="pinkToYellow" />

      <Panel padding className={classes.curve}>
        <Grid container justify="space-between">
          <Grid
            item
            container
            xs
            direction="column"
            justify="center"
            className={classes.mainTextContainer}
          >
            <Typography variant="h2" className={classes.panelTitle}>
              The SAT is a Joke
            </Typography>
            <Grid item>
              <Typography variant="h5">
                It doesn't measure intelligence.
              </Typography>
              <Typography variant="h5">
                It doesn't measure creativity.
              </Typography>
              <Typography variant="h5">It doesn't measure aptitude.</Typography>
            </Grid>
          </Grid>

          <Grid item xs={6} className={classes.mainGraphic}>
            <img src={mainGraphic} alt="students with ideas" />
          </Grid>
        </Grid>
      </Panel>

      <Typography
        variant="h5"
        align="center"
        gutterBottom
        className={classes.topRulerText}
      >
        The only thing the SAT measures is
      </Typography>
      <img src={ruler} alt="ruler" className={classes.ruler} />

      <Panel hidden>
        <Typography variant="h4" align="center">
          HOW GOOD YOU ARE AT TAKING IT!
        </Typography>
        <Grid item container justify="center">
          <img src={chevronDown} className={classes.chevronDown} />
        </Grid>
        <Grid item className={classes.copyContainer}>
          <img src={net} alt="network" className={classes.net} />
          <CardCustom padding className={classes.copyCard}>
            <Typography variant="body1" className={classes.copy}>
              This is fantastic for you though! Huh...What...How? Because, you
              don't have to relearn 4 years of high school to get a higher SAT
              score. In fact, you could dramatically improve your score{" "}
              <u>without doing a single practice problem.</u>
            </Typography>

            <Typography variant="body1" className={classes.copy}>
              Unfortunately, the test prep industry seems to be competing over
              who can be the <strong>driest</strong>, <strong>boringest</strong>{" "}
              (look it up), and most <strong>complicated</strong>.
            </Typography>
            <Typography variant="body1">
              We think test prep works best when it's <strong>simple</strong>,{" "}
              <strong>straight-forward</strong>, and (dare we say it) even{" "}
              <strong>fun</strong>! And once you learn our strategies to defeat
              the SAT, you’ll have the tools to achieve your highest possible
              score.
            </Typography>
          </CardCustom>
        </Grid>
      </Panel>

      <Panel
        color="white"
        skewedBackgroundColor="blueToPurple"
        skewed
        className={classes.programsPanel}
        header
        smallIcon={triangle}
        title="SAT Programs"
        subtitle="For every budget and time constraint"
        body="Whether you're blue-collar or a trustafarian, a go-getter or procrastinator, a teacher's pet or truant, we've got the program for you!"
      >
        <Grid
          item
          container
          justify="space-between"
          className={classes.programWrapper}
        >
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            container
            direction="column"
            justify="center"
            className={classes.programContainer}
          >
            <Typography variant="h4" color="inherit" component="h4">
              Online Course
            </Typography>
            <Typography variant="body1" color="inherit">
              Video lessions, interactive puzzles, and games guide students
              through our SAT curriculum. The curriculum itself dynamically
              adjusts based on student performance. This prevents students from
              feeling overwhelmed while also keeping the course challenging. As
              this program is self-paced, it's geared more towards
              self-motivated students.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={5}>
            <Card className={classes.programImgContainer}>
              <img src={online} className={classes.programImg} />
            </Card>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justify="space-between"
          className={classes.programWrapperMiddle}
        >
          <Grid item xs={12} sm={10} md={5}>
            <Card className={classes.programImgContainer}>
              <img src={tutor} className={classes.programImg} />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            container
            direction="column"
            justify="center"
            className={classes.programContainerMiddle}
          >
            <Typography variant="h4" color="inherit" component="h4">
              1-on-1 Tutoring
            </Typography>
            <Typography variant="body1" color="inherit">
              Even the latest tech is no substitate for a world-class tutor.
              Unfortunately, locating one in the sea of deceptive online reviews
              is no easy task. See, students tend to highly rate tutors who
              don't push them and many parents only look to short-term grade
              increases (acheived via pattern recognition) for feedback.
              Whilebut it's our specialty. Every one of our tutors is hand
              picked for their passion, personality, true understading of
              subject material, and ability to communicate this knowledge.
              Choice of sessions taking place at a public venue, such as a
              coffee shop, or at your place of residence.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justify="space-between"
          className={classes.programWrapper}
        >
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            container
            direction="column"
            justify="center"
            className={classes.programContainer}
          >
            <Typography variant="h4" color="inherit" component="h4">
              8 Hour Bootcamp
            </Typography>
            <Typography variant="body1" color="inherit">
              Over one weekend (split into 2 intense 4 hour sessions), students
              are equipped with every tip, trick, and strategy in our arsenal to
              defeat the SAT. This is the ultimate refresher for students who've
              been studying diligently, and the the ultimate cramming session
              for procrastinators.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={5}>
            <Card className={classes.programImgContainer}>
              <img src={bootcamp} className={classes.programImg} />
            </Card>
          </Grid>
        </Grid>
      </Panel>
      <Panel className={classes.checkoutPanel}>
        <Typography variant="h3" gutterBottom align="center">
          Which One Works For You?
        </Typography>
        <Grid item container className={classes.programAdWrapper}>
          <Program
            left
            highlights={[
              "Dozens of videos.",
              "Hundreds of practice problems",
              "Free copy of our SAT prep book"
            ]}
            subtitle="Online Course"
            to="/checkout?program=1-on-1 Tutoring&course=SAT"
            as="/checkout/sat/1-on-1"
            showexpectedPoints
            expectedPoints="100+"
            button
            buttonText="Start for Free"
            fullHeight
          />

          <Program
            middle
            ribbon
            highlights={[
              "Most comprehensive program",
              "Tailored to meet student needs",
              "Powerful diagnostic and progress reports.",
              "Includes full access to online SAT course."
            ]}
            subtitle="1-on-1 Tutor"
            to="/checkout?course=SAT&program=1-on-1"
            as="/checkout/SAT/1-on-1"
            showexpectedPoints
            expectedPoints="226+"
            button
            buttonText="Choose a Plan"
          />

          <Program
            right
            highlights={[
              "Have every key strategy before test day.",
              "Lively and inspiring",
              "Copy of our SAT prep book included"
            ]}
            subtitle="Bootcamp"
            to="/checkout?course=SAT&program=Bootcamp"
            as="/checkout/SAT/Bootcamp"
            showexpectedPoints
            expectedPoints="120+"
            button
            buttonText="See Pricing"
            fullHeight
          />
        </Grid>
      </Panel>
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
};

export default withStyles(styles)(Sat);
