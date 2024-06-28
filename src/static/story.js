import SchoolIcon from "@mui/icons-material/School";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

const story = [
  {
    year: "2022",
    icon: <SchoolIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <SchoolIcon sx={{ width: 66, height: 66, color: "#fff" }} />,
    title: "Unlocking the Power of Community Action in Oke Atan, Osun State",
    description:
      "Salvation Army Primary School, Oke Atan, in Osun State, had been dilapidated for 8 years without government intervention. We trained the Parents Teachers Association on advocacy strategies and using community action to foster development. They swung into action. Two years later, the school was renovated by the government and is now fully functional.",
  },
  {
    year: "2021",
    icon: <HealthAndSafetyIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: (
      <HealthAndSafetyIcon sx={{ width: 66, height: 66, color: "#fff" }} />
    ),
    title:
      " 16,000 residents in Katsina now access Health Care Facility after Tracka’s Intervention",
    description:
      "In Katsina state, over 16,000 people in Gana Jigawa in Mashi LGA did not have quality primary healthcare. The community's healthcare centre was dilapidated and had no equipment or drugs; therefore, citizens abandoned it. After repeated advocacy by Tracka and the community members, the project was captured in the budget. However, the contractor was coy and wanted to abandon the renovation of the facility, but Tracka alerted the public and community residents intensified the advocacy. The facility was renovated and adequately furnished in 2021. Today, over 16,000 residents in Katsina have access to quality healthcare.",
  },
  {
    year: "2019",
    icon: (
      <MedicalInformationIcon sx={{ width: 30, height: 30, color: "#fff" }} />
    ),
    icon2: (
      <MedicalInformationIcon sx={{ width: 66, height: 66, color: "#fff" }} />
    ),
    title:
      "New Hope for Gawu Babangida – 9 years after zero Access to Healthcare",
    description:
      "2019 was the first time we visited Gawu-Babangida, a community of over 500 residents, and discovered they had been without access to healthcare services for 7 years. Residents who require maternal and emergency services had to travel at least 30km to Suleja or Minna, and some died on the way. Tracka intervened and commenced advocacy efforts, and five years later, the story has changed.",
  },
  {
    year: "2018",
    icon: <MonitorHeartIcon sx={{ width: 30, height: 30, color: "#fff" }} />,
    icon2: <MonitorHeartIcon sx={{ width: 66, height: 66, color: "#fff" }} />,
    title:
      "From Under the Tree to Cottage: How Tracka’s Advocacy Revived Sokoto Community’s Primary Healthcare",
    description:
      "In 2018, we visited Kaffe in Sokoto and saw women and children receiving drips and treatment under a tree with wrappers spread on the floor as the ‘bed’ and tree branches as drip stands. It was a gory sight to behold. After consistent advocacy, the state government built a standard cottage hospital for the community in 2019.",
  },
];

export default story;
