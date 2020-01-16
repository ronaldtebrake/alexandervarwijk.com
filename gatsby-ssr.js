import React from 'react';
import { withPrefix } from "gatsby";

function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script key="main" async src={"//visit.alexandervarwijk.com/hello.js"}></script>
  ])
}

export {
  onRenderBody,
}
