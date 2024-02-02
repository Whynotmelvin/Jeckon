import React from "react";
import Icon from "../../assests/images/Banner-icon.svg";
import SchoolIcon from "@mui/icons-material/School";
import Banner from "../../assests/images/Banner-image.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const Careers = () => {
  return (
    <div>
      <div className="text-center flex flex-col items-center my-20">
        <h1 className="text-3xl font-bold my-8  text-teal-700 ">
          What we <span className="text-orange-500">OFFER</span>{" "}
        </h1>
        <p className="max-w-[528px]">
          As the leading publishing company specializing in high-quality
          exercise books for nursery to primary school, we are thrilled to
          introduce a range of exclusive benefits and offers designed to elevate
          the educational experience at Your School.
        </p>
      </div>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2">
        <div className="flex">
          <img
            src={Banner}
            width={540}
            height={324}
            className="rounded-lg self-center"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold my-8 text-orange-500 text-center">
            A Learning experience for future{" "}
            <span className="text-orange-500">Leaders</span>{" "}
          </h1>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText
                primary="Early Access to Educational Trends:"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {
                      "Gain a competitive edge with our insights into the latest educational trends. Stay ahead of the curve with regular updates on the latest trends in educational materials. Be the first to explore and incorporate our new releases, ensuring your school remains at the forefront of innovative teaching and learning resources. "
                    }
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText
                primary="Differentiated Assessment  Levels:"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {
                      "Ensure that our exercise books are meticulously crafted to align with educational assessments and standards. The questions provided are designed to gauge students' understanding and mastery of key concepts, facilitating effective assessment strategies for educators and providing valuable insights into students' academic progress. "
                    }
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText
                primary="Educational Excellence: "
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {
                      "Commit to supporting educational excellence by producing exercise books that align with curricular requirements, facilitate effective learning, and contribute to students"
                    }
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
        </div>
      </div>
    </div>
  );
};

export default Careers;
