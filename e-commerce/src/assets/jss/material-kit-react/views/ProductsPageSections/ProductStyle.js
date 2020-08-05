import { cardTitle, title } from "../../../material-kit-react.js";
import imagesStyle from "../../../material-kit-react/imagesStyles.js";
// import acas from ''

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    // color: "#999"
  },

  reducedprice:{
    color: 'green',
    fontSize: "26px",
    fontWeight:'bold'
  },

  price:{
      color: "#999",
      textDecoration: 'line-through',
      fontSize: "20px",

  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
};

export default teamStyle;
