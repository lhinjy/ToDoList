import React, { useState } from "react";

export const SearchBar = ({
  updateSearchParams,
}: {
  updateSearchParams: (params: ISearchParams) => void;
}) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  return <div>SearchBar</div>;
};
