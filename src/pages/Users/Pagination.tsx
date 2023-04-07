import * as React from "react";
// import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Props {
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  count: number;
  currentPage: number;
  perPage: number;
}

export default function PaginationControlled({
  onPageChange,
  count,
  currentPage,
  perPage,
}: Props) {
  const pageCount = Math.ceil(count / perPage);
  return (
    <Stack spacing={2}>
      {/* <Typography>Page: {currentPage}</Typography> */}
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={onPageChange}
      />
    </Stack>
  );
}
