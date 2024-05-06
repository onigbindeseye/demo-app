import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import banner1 from "../../../assets/images/outreach.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="body1">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Intro = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Box margin={{ xs: "5% 0% 25% 0%", sm: "2% 0% 10% 0%" }}>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: "100%", sm: "42%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
          paddingRight={{ xs: "0%", sm: "4%" }}
        >
          <Typography
            variant={"body1"}
            fontWeight={400}
            textAlign={"left"}
            color={"#4f4f4f"}
            lineHeight={"1.625em"}
          >
            The Oluseun Onigbinde Resource Centre, previously known as Proximity
            Trust, is a beacon of hope and opportunity, dedicated to fostering
            positive change and empowerment within communities across Oyo State.
            Founded by Oluseun Onigbinde, our organization is committed to
            providing comprehensive support and resources to individuals and
            communities in need. With a firm belief in the transformative power
            of collective action and community engagement, the Resource Centre
            endeavors to address pressing social challenges and unlock
            opportunities for individuals to thrive. Through strategic
            initiatives in healthcare, education, youth engagement, and
            entrepreneurship, we strive to uplift lives and create sustainable
            impact.
          </Typography>
          <Box
            width={{ xs: "100%", sm: "58%" }}
            display={{ xs: "block", sm: "none" }}
            margin={"15% 0%"}
          >
            <Box
              component="img"
              height={{ xs: "95vh", sm: "80vh" }}
              sx={{
                objectFit: "cover",
                width: "100%",
              }}
              src={banner1}
              alt={"image"}
            />
          </Box>

          <Box
            marginLeft={{ xs: "0%", sm: "0%" }}
            marginTop={{ xs: "10%", sm: "5%" }}
            padding={{ xs: "1%", sm: "2%" }}
            bgcolor={"#071783"}
          >
            <Box
              sx={{
                bgcolor: "background.paper",
                width: 600,
              }}
            >
              <AppBar
                position="static"
                sx={{
                  bgcolor: "#071783",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                  sx={{
                    bgcolor: "#071783",
                    width: "80%",
                  }}
                >
                  <Tab
                    label="Our Mission"
                    {...a11yProps(0)}
                    sx={{
                      fontWeight: 700,
                    }}
                  />

                  <Tab
                    label="Our Vision"
                    {...a11yProps(1)}
                    sx={{
                      fontWeight: 700,
                    }}
                  />
                  <Tab
                    label="Our Core Values"
                    {...a11yProps(2)}
                    sx={{
                      fontWeight: 700,
                    }}
                  />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <Box width={{ xs: "100%", sm: "100%" }}>
                    <Typography
                      variant={"body1"}
                      color={"#4f4f4f"}
                      paddingTop={"1%"}
                      paddingLeft={{ xs: "2%", sm: "8%" }}
                    >
                      Our mission is to enhance the well-being and prospects of
                      individuals and communities through a multifaceted
                      approach encompassing healthcare, education, skill
                      development, and economic empowerment.
                    </Typography>
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Box width={{ xs: "100%", sm: "100%" }}>
                    <Typography
                      variant={"body1"}
                      color={"#4f4f4f"}
                      paddingTop={"1%"}
                      paddingLeft={{ xs: "2%", sm: "8%" }}
                    >
                      Our vision is to build a community where every individual,
                      regardless of their circumstances, has access to essential
                      resources, opportunities, and support, fostering a society
                      rooted in compassion and collective well-being.
                    </Typography>
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <Typography variant={"body1"} color={"#4f4f4f"}>
                    {" "}
                    <Typography
                      component={"span"}
                      color="#F2C844"
                      fontWeight={500}
                      variant={"h5"}
                    >
                      &#10004;{" "}
                    </Typography>{" "}
                    Positive Impact
                  </Typography>
                  <Typography
                    variant={"body1"}
                    color={"#4f4f4f"}
                    paddingTop={"1%"}
                  >
                    {" "}
                    <Typography
                      component={"span"}
                      color="#F2C844"
                      fontWeight={500}
                      variant={"h5"}
                    >
                      &#10004;{" "}
                    </Typography>{" "}
                    Compassionate Acts of Giving
                  </Typography>
                  <Typography
                    variant={"body1"}
                    color={"#4f4f4f"}
                    paddingTop={"1%"}
                  >
                    {" "}
                    <Typography
                      component={"span"}
                      color="#F2C844"
                      fontWeight={500}
                      variant={"h5"}
                    >
                      &#10004;{" "}
                    </Typography>{" "}
                    Financial & Economic Empowerment
                  </Typography>
                  <Typography
                    variant={"body1"}
                    color={"#4f4f4f"}
                    paddingTop={"1%"}
                  >
                    {" "}
                    <Typography
                      component={"span"}
                      color="#F2C844"
                      fontWeight={500}
                      variant={"h5"}
                    >
                      &#10004;{" "}
                    </Typography>{" "}
                    Thriving and Brighter Future
                  </Typography>
                </TabPanel>
              </SwipeableViews>
            </Box>
          </Box>
        </Box>
        <Box
          width={{ xs: "100%", sm: "58%" }}
          display={{ xs: "none", sm: "block" }}
        >
          <Box
            component="img"
            height={{ xs: "95vh", sm: "80vh" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={banner1}
            alt={"image"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
