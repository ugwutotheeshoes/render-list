import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const data = new Array(1000).fill().map((value, index) => ({
    id: index,
    name: faker.name.firstName(5),
    body: faker.lorem.paragraph(8),
  }));

  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next));
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)));
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
  };

  return (
    <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div>
        {current &&
          current.map((item, index) => (
            <div key={index} className="post">
              <h3>{`${item.name}-${item.id}`}</h3>
              <p>{item.body}</p>
            </div>
          ))}
      </div>
    </InfiniteScroll>
  );
}
export default App;
