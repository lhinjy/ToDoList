import React, { ReactElement, useState } from "react";

type HeadingProps = {
  title: string;
};
export const Heading = ({ title }: HeadingProps): ReactElement => {
  const [test, setTest] = useState(10);
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
