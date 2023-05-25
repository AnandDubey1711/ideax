import React from "react";
import "./algorithm.css";
const algorithm = () => {
  return (
    <section id="algorithm">
      <div className="algo_design">
        <h2 className="algo_heading">
          If you can imagine it and visualize it, then you can create it
        </h2>
      </div>

      <div className="cards">
        <div className="card">
          <div className="algo_card">
            <h2 className="algo_name">Bubble Sort</h2>
            <p className="algo_details">Bubble sort is a sorting algorithm</p>
            <div className="algo_btn">
              <button className="algo_button">Visualize</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="algo_card">
            <h2 className="algo_name">Selection Sort</h2>
            <p className="algo_details">Selection sort is a sorting algorithm</p>
            <div className="algo_btn">
              <button className="algo_button">Visualize</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="algo_card">
            <h2 className="algo_name">Quick Sort</h2>
            <p className="algo_details">Quick sort is a sorting algorithm</p>
            <div className="algo_btn">
              <button className="algo_button">Visualize</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="algo_card">
            <h2 className="algo_name">Merge Sort</h2>
            <p className="algo_details">Merge sort is a sorting algorithm</p>
            <div className="algo_btn">
              <button className="algo_button">Visualize</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="algo_card">
            <h2 className="algo_name">Insertion Sort</h2>
            <p className="algo_details">Insertion sort is a sorting algorithm</p>
            <div className="algo_btn">
              <button className="algo_button">Visualize</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="algo_card">
            <h2 className="algo_name">Binary Trees</h2>
            <p className="algo_details">Binary Tree is a Tree algorithm</p>
            <div className="algo_btn">
              <button className="algo_button">Visualize</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default algorithm;
