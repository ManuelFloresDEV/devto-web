import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { getPosts } from "@/utils/api";
import { usePosts } from "@/hooks";

function App() {
  const size = useWindowSize();
  const data = usePosts();

  console.log(data);
  return (
    <div>
      <h1>useWindowSize</h1>
      <p>Resize the window to see the changes</p>
      <table>
        <tbody>
          <tr>
            <th>Width</th>
            <td>{size.width}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{size.height}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
