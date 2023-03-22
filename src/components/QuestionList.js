import React ,{useState,useEffect}from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  // Add useEffect hook
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> {items.map((item) => (
        <>
    <li>{item.prompt}</li>
    <li>{item.answers.map((item) => (<li>{item}</li>))}</li></>
        ))}</ul>
    </section>
  );
}

export default QuestionList;
