import React from "react";
import "./styles.css";



function HelloWorldArticle() {
  return <article>
    <h1>Hello Article</h1>
    <p>
    Note: Add whatever tags you like, but the predefined styles are limited ;)
    </p>
  </article>;
};


export default function App() {
  return <HelloWorldArticle />;
};

