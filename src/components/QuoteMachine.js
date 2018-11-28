import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Card>
    <CardContent>
      <Typography id="text">
        <p style={{ fontSize: 20 + "px" }}>
          {selectedQuote.quote} -{" "}
          <span style={{ fontSize: 14 + "px" }} id="author">
            {selectedQuote.author}
          </span>
        </p>
      </Typography>
    </CardContent>
    <CardActions>
      <Button id="new-quote" size="medium" onClick={assignNewQuoteIndex}>
        Next Quote
      </Button>
      <IconButton
        id="tweet-quote"
        target="_blank"
        href={encodeURI(
          `https://twitter.com/intent/tweet?text=${selectedQuote.quote}`
        )}
      >
        <FontAwesomeIcon icon={faTwitter} size="md" />
      </IconButton>
    </CardActions>
  </Card>
);

export default QuoteMachine;
