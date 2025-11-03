import FeedbackCard from "./FeedbackCard";
import { FeedbackData } from "../../Data";

function ArticleFeedback() {
  return (
    <div className="feedback">
      <div className="slide">
        <div className="feedback-hold">
          {FeedbackData.map((item, index) => (
            <FeedbackCard data={item} key={index} />
          ))}
        </div>
        <div className="feedback-hold">
          {FeedbackData.map((item, index) => (
            <FeedbackCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleFeedback;
