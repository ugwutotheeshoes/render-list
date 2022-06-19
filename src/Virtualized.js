import React from "react";
import { faker } from "@faker-js/faker";
import { List } from "react-virtualized";

function App() {
  const data = new Array(1000).fill().map((value, index) => ({
    id: index,
    name: faker.name.firstName(5),
    body: faker.lorem.paragraph(8),
  }));

  const renderRow = ({ index, key, style }) => (
    <div>
      <div key={key} style={style} className="post">
        <h3>{`${data[index].name}-${data[index].id}`}</h3>
        <p>{data[index].body}</p>
      </div>
    </div>
  );
  return (
    <List
      width={1200}
      height={700}
      rowRenderer={renderRow}
      rowCount={data.length}
      rowHeight={120}
    />
  );
}
export default App;
