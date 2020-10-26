import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../layout/Header/Header";
import { Helmet } from "react-helmet";
import { DEFAULT_DESC, SITE_NAME } from "../../constants/meta";
import { FaGithub } from "react-icons/fa";
import usePageView from "../../lib/usePageView";
import "./AboutPage.scss";

export default function AboutPage() {
  usePageView();

  return (
    <div className="AboutPage">
      <Helmet>
        <title>About - {SITE_NAME}</title>
        <meta name="description" content={DEFAULT_DESC} />
      </Helmet>
      <Header simple />
      <Container className="pb-5">
        <h1>About the project</h1>
        <p>
          This effort started in mid-2020 and is a merger of other{" "}
          <a href="https://www.wikidata.org/wiki/Wikidata:Tools/Visualize_data">
            wikidata visualisation tools
          </a>{" "}
          about trees, with some extra features that make it more usable and
          navigable.
        </p>
        <p>Our mission is to support the following people:</p>
        <ul>
          <li>
            researchers of any level that want to explore wikidata connections
            in a visual way{" "}
            <span role="img" aria-label="research icon">
              🧪
            </span>
          </li>
          <li>
            scientists that are keen to use an interactive taxonomy tree 🔬
          </li>
          <li>
            historians investigating royal families{" "}
            <span role="img" aria-label="crown icon">
              👑
            </span>
          </li>
          <li>
            students of any kind of discipline, that want to enrich they
            knowledge 🎓
          </li>
          <li>
            curious random and non English-speaking people from around the
            globe, thanks to the multilingual feature{" "}
            <span role="img" aria-label="world icon">
              🌎🌍🌏
            </span>
          </li>
          <li>
            Wikidata editors and contributors, especially if they are interested
            in spotting missing or duplicate links{" "}
            <span role="img" aria-label="nerd icon">
              🤓
            </span>
          </li>
        </ul>
        <p>
          Please feel free to get in touch with any member of the team, for
          technical queries or help around the user interface{" "}
          <a
            href="https://github.com/ogroppo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Orlando
          </a>{" "}
          is the right guy, for anything related to (wiki)data{" "}
          <a
            href="https://github.com/mshd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Martin
          </a>{" "}
          will be more than happy to help you.
        </p>
        <p>
          If you notice any strange behaviour in the interface or you think
          something could be improved, by any means{" "}
          <a
            className="btn btn-sm bg-light"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ogroppo/entitree/issues"
          >
            <FaGithub /> report a bug!
          </a>
        </p>
        <p>
          Our visitors are very precious to us and are always in our minds while
          building this tool. If you could feel the love we have put in this
          project and you want to participate to the growth of the amazing
          community orbiting around Wikidata, please make a donation.
        </p>
        <div className="donateButtons">
          <div>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="MC7KHB7EAYQVS"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
            <i>in £ (Pound)</i>
          </div>
          <div>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="UCGVUMMYRQKX6"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>

            <i>in € (Euro)</i>
          </div>
        </div>
        <p className="mt-3">
          50% of the amount will be forwarded to the{" "}
          <a href="https://wikimediafoundation.org/">
            Wikimedia foundation (the creator of Wikipedia)
          </a>
          , the rest reinvested in Entitree.com
        </p>
      </Container>
    </div>
  );
}
