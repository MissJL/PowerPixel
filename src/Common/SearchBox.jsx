import React, { useRef, useState } from "react";
import { useEffect } from "react";
import {
  Container,
  IconMagnifyingGlass,
  SearchInput,
  IconRightArrow,
} from "./styleSearchBox";

function SearchBox() {
  const targetRef = useRef(null);
  //clear element if clicked away
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  //when mouse is hovered on element
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocused={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}
    >
      <SearchInput ref={targetRef} showSearchInput={showSearchInput} />
      {showSearchInput ? <IconRightArrow /> : <IconMagnifyingGlass />}
    </Container>
  );
}

export default SearchBox;
