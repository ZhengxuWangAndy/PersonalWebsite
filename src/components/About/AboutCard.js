import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zhengxu Wang </span>
            from <span className="purple"> Boston University.</span>
            <br />I am a <span className="purple">Master's</span> student majoring in <span className="purple">Computer Science</span>.
            <bt />Going to graduate in <span className="purple">Jan 2024</span>, actively seeking an entry level software engineer position.
            <br />
            <br />I am very good at sports, especially <span className="purple">Basketball</span>. I was the school's Basketball team PF and that experience taught me how to <span className="purple">team work</span> and the importance of <span className="purple">Communication</span>. Now I keep the exercising habit, regularly going to the gym 2-3 times a week makes me more energetic.
            <br />
            <br />I have passion for learning new things and writing code to make it work. When an idea comes up I like to try it asap, I enjoy the feeling of achievement.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
