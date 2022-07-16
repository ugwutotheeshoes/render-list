import React from "react";
import { faker } from "@faker-js/faker";
import ReactPaginate from "./ReactPaginate";
import InfiniteScroll from "./InfiniteScroll";
import Virtualized from "./Virtualized";
import Window from "./Window";
import Viewport from "./Viewport";

const data = new Array(100).fill().map((value, index) => ({
  id: index,
  name: faker.name.firstName(5),
  body: faker.lorem.paragraph(4),
}));

function App() {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="post">
          <h3>
            {item.name} - {item.id}
          </h3>
          <p>{item.body}</p>
        </div>
      ))}

      {/* <ReactPaginate /> */}
      {/* <InfiniteScroll /> */}
      {/* <Virtualized /> */}
      {/* <Window /> */}
      {/* <Viewport /> */}
    </div>
  );
}
export default App;
