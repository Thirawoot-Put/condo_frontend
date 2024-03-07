import React from 'react';

export default function TextContainer({ users }) {
  return <div>{users.map((user) => user.name)}</div>;
}
