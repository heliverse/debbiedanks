import * as React from "react";

import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination() {
  const [page, setPage] = useState(1);
  return (
    <Stack spacing={2}>
      <Pagination
        count={50}
        color="error"
        size="large"
        defaultPage={page}
        onChange={(event, value) => setPage(value)}
      />
    </Stack>
  );
}
