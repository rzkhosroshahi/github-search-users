import React from 'react';

const TextFiled = ({ refs }) => (
  <input
    type="search"
    className="lg-6 sm-8"
    placeholder="Location"
    ref={refs}
  />
    );
export default TextFiled;
