import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout";

import { renderGraph } from "../utils/graph";

function Group() {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const id = "055a8a88-7a9f-4522-9525-5a39a08699ed";
      const response = await axios(`https://mbti-api.ttbkk.com/api/mbti/${id}`);
      const data = await response.data;
      console.log(data);
      renderGraph(data);
    })();
  }, []);

  return (
    <Layout>
      <div id="mountNode" style={{ height: "80vh" }}></div>
    </Layout>
  );
}

export default Group;