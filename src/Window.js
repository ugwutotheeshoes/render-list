import React from "react";
import { faker } from "@faker-js/faker";
import { FixedSizeList as List } from "react-window";

function App() {
  const data = new Array(1000).fill().map((value, index) => ({
    id: index,
    name: faker.name.firstName(5),
    body: faker.lorem.paragraph(8),
  }));

  const Row = ({ index, key, style }) => (
    <div>
      <div key={key} style={style} className="post">
        <h3>{`${data[index].name}-${data[index].id}`}</h3>
        <p>{data[index].body}</p>
      </div>
    </div>
  );
  return (
    <List width={1400} height={700} itemCount={data.length} itemSize={120}>
      {Row}
    </List>
  );
}
export default App;
