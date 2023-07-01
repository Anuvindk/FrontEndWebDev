import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";

const react = require("react");
const reactDom = require("react-dom");

reactDom.render(
  <div>
    <Header />
    <Notes />
    <Footer />
  </div>
  ,document.getElementById("root")
);