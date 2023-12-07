import styled from "styled-components";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const Pagination = ({
  total = 0,
  limit = 0,
  page = 1,
  onClickNext,
  onClickBack,
}) => {
  const pageQuantity = Math.ceil(total / limit);
  // console.log(Array(pageQuantity) , ...Array(pageQuantity));

  return (
    <StyledPagination>
      <button onClick={onClickBack}>
        <TfiAngleLeft />
      </button>

      {[...Array(pageQuantity)].map((p, i) => {
        return (
          <span
            key={i}
            className={`page_box ${i === page - 1 ? "selected" : ""}`}
          >
            {i + 1}
          </span>
        );
      })}

      <button onClick={onClickNext}>
        <TfiAngleRight />
      </button>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  .page_box.selected {
    color: orange;
  }
`;

export default Pagination;
