import React, { useState } from "react";
import "./details.css";

const Details = () => {
  const [visible, setVisible] = useState(true);
  const [string, setString] = useState(true);
  const [linked, setLinked] = useState(true);
  const [queue, setQueue] = useState(true);

  return (
    <section id="details">
      <h1 className="details_title">Programming Concepts</h1>
      <div className="content">
        <div className="details_btn">
          <button onClick={() => setVisible(visible)}>
            {visible ? "Array" : "Array"}
          </button>
          {visible && <Array />}
        </div>

        <div className="details_btn">
          <button onClick={() => setString(string)}>
            {string ? "String" : "String"}
          </button>
          {string && <String />}
        </div>

        <div class="flex-container">
          <div className="flex_btn">
            <button onClick={() => setLinked(visible)}>
              {visible ? "LinkedList" : "LinkedList"}
            </button>
            {linked && <LinkedList />}
          </div>

          <div>
            <div className="flex_btn">
              <button onClick={() => setQueue(visible)}>
                {visible ? "Queue" : "Queue"}
              </button>
              {queue && <Queue />}
            </div>
          </div>
        </div>

        <div class="flex-container">
          <div>
            <div className="flex_btn">
              <button onClick={() => setVisible(visible)}>
                {visible ? "Graph" : "Graph"}
              </button>
              {visible && <Graph />}
            </div>
          </div>
          <div>
            <div className="flex_btn">
              <button onClick={() => setVisible(visible)}>
                {visible ? "Tree" : "Tree"}
              </button>
              {visible && <Tree />}
            </div>
          </div>
        </div>

        <div class="flex-container">
          <div>
            <div className="flex_btn">
              <button onClick={() => setVisible(visible)}>
                {visible ? "Greedy" : "Greedy"}
              </button>
              {visible && <Greedy />}
            </div>
          </div>
          <div>
            <div className="flex_btn">
              <button onClick={() => setVisible(visible)}>
                {visible ? "Dynamic" : "Dynamic"}
              </button>
              {visible && <Dynamic />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Array() {
  return (
    <div className="array">
      <p className="array_para">
        An array is a collection of items of same data type stored at contiguous
        memory locations. This makes it easier to calculate the position of each
        element by simply adding an offset to a base value, i.e., the memory
        location of the first element of the array (generally denoted by the
        name of the array). The base value is index 0 and the difference between
        the two indexes is the offset.
      </p>
    </div>
  );
}

function String() {
  return (
    <div className="string">
      <div className="string_para">
        A string is typically a series of computer science instructions, whether
        as a literal constant or as some variable. The latter may be able to
        evolve its components and adjust the duration, or it could be set (after
        creation). A string is generally acknowledged as an information form. It
        is often represented as a byte (or term) range information structure
        that uses some character encoding to preserve a series of components,
        usually letters. The sequence can also designate as more generalized
        arrays or other forms and arrangements of sequence (or array)
        information.
      </div>
    </div>
  );
}

function LinkedList() {
  return (
    <div className="linked_list">
      <div className="linked_para">
        A linked list is the most sought-after data structure when it comes to
        handling dynamic data elements. A linked list consists of a data element
        known as a node. And each node consists of two fields: one field has
        data, and in the second field, the node has an address that keeps a
        reference to the next node.
      </div>
    </div>
  );
}
function Queue() {
  return (
    <div className="queue">
      <div className="queue_para">
        In computer science, a queue is a collection of entities that are
        maintained in a sequence and can be modified by the addition of entities
        at one end of the sequence and the removal of entities from the other
        end of the sequence.
      </div>
    </div>
  );
}

function Graph() {
  return (
    <div className="graph">
      <div className="graph_para">
        A graph is an abstract data type (ADT) that consists of a set of objects
        that are connected to each other via links. These objects are called
        vertices and the links are called edges. Usually, a graph is represented
        as G = (V, E), where G is the graph space, V is the set of vertices and
        E is the set of edges. If E is empty, the graph is known as a forest.
      </div>
    </div>
  );
}

function Tree() {
  return (
    <div className="tree">
      <div className="tree_para">
        A tree data structure is a non-linear data structure because it does not
        store in a sequential manner. It is a hierarchical structure as elements
        in a Tree are arranged in multiple levels. In the Tree data structure,
        the topmost node is known as a root node. Each node contains some data,
        and data can be of any type.
      </div>
    </div>
  );
}

function Greedy() {
  return (
    <div className="greedy">
      <div className="greedy_para">
        Greedy is an algorithmic paradigm that builds up a solution piece by
        piece, always choosing the next piece that offers the most obvious and
        immediate benefit. So the problems where choosing locally optimal also
        leads to global solution are the best fit for Greedy.
      </div>
    </div>
  );
}

function Dynamic() {
  return (
    <div className="dynamic">
      <div className="dynamic_para">
        Dynamic programming is a technique that breaks the problems into
        sub-problems, and saves the result for future purposes so that we do not
        need to compute the result again. The subproblems are optimized to
        optimize the overall solution is known as optimal substructure property.
      </div>
    </div>
  );
}

export default Details;
