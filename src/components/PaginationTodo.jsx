import { Pagination, Stack } from "@mui/material";
import PropTypes from "prop-types";


function PaginationTodo({ count, page, onPageChange }) {
  return (
    <div className="mb-20 lg:ml-[25%]">
      <Stack spacing={1}>
        <Pagination
          count={count}
          page={page}
          onChange={onPageChange}
          variant="outlined" color="primary"
        />
      </Stack>
    </div>
  );
}

PaginationTodo.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default PaginationTodo;
