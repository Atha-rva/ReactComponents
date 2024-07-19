import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  Input,
  makeStyles,
  makeStaticStyles,
  shorthands,
  Button,
  TableCellLayout,
  useFocusableGroup,
} from "@fluentui/react-components";

import { DeleteFilled, AddFilled } from "@fluentui/react-icons";

interface Item {
  file: { label: string };
  author: { label: string; status: string };
  lastUpdated: { label: string; timestamp: number };
  lastUpdate: { label: string };
}

interface Column {
  columnKey: string;
  label: string;
}

interface ZTableProps {
  items: Item[];
  columns: Column[];
  onDelete: (index: number) => void;
  onAddRow: () => void;
}

const useStyle = makeStyles({
  table: {
    ".fgkb47j": {
      borderCollapse: "unset",
    },
    ".f16j7guv::after, .f1vccso1::before": {
      border: "1px solid white",
      borderTopColor: "white",
    },
  },
  input: {
    borderRadius: "10px",
    width: "100%",
    height: "35px",
    ":after": {
      ...shorthands.borderBottom("none"),
    },
    ":hover": {
      ...shorthands.borderColor("#616161"),
    },
    ...shorthands.borderColor("#616161"),
  },
  deleteButton: {
    marginLeft: "8px",
  },
  lastColumn: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  cell: {
    borderRight: "2px solid #D1D1D1",
    borderLeft: "2px solid #D1D1D1",
    borderBottom: "2px solid #D1D1D1",
    // borderTop: "2px solid #D1D1D1",
  },
  lastCell: {
    borderRight: "none",
    borderLeft: "2px solid #D1D1D1",
    borderBottom: "2px solid #D1D1D1",
    width: "100px",
    maxWidth: "100px",
  },
  actionsCell: {
    width: "100px",
    maxWidth: "100px",
  },
});

const useStaticStyle = makeStaticStyles({
  "::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
  },
  "::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    border: "2px solid transparent",
    backgroundClip: "content-box",
  },
  "::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});

export const ZTableAction: React.FC<ZTableProps> = ({
  items,
  columns,
  onDelete,
  onAddRow,
}) => {
  useStaticStyle();
  const styles = useStyle();

  const focusableGroupAttr = useFocusableGroup({
    tabBehavior: "limited-trap-focus",
  });

  const handleDelete = (index: number) => {
    onDelete(index);
  };

  return (
    <div>
      <Table
        className={styles.table}
        aria-label="Default table"
        style={{
          minWidth: "810px",
          backgroundColor: "#F5F5F5",
          borderRadius: "10px",
        }}
      >
        <TableHeader style={{ height: "32px" }}>
          <TableRow>
            {columns.map((column, index) => (
              <TableHeaderCell
                className={styles.cell}
                style={{
                  width: index === columns.length - 1 ? "20%" : "auto",
                }}
                key={column.columnKey}
              >
                {column.label}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody style={{ width: "20%" }}>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className={styles.cell}>
                <Input
                  className={styles.input}
                  defaultValue={item.file.label}
                />
              </TableCell>
              <TableCell className={styles.cell}>
                <Input
                  className={styles.input}
                  defaultValue={item.author.label}
                />
              </TableCell>
              <TableCell className={styles.cell}>
                <Input
                  className={styles.input}
                  defaultValue={item.lastUpdated.label}
                />
              </TableCell>
              <TableCell className={styles.cell}>
                <Input
                  className={styles.input}
                  defaultValue={item.lastUpdate.label}
                />
              </TableCell>
              <TableCell
                role="gridcell"
                tabIndex={0}
                className={styles.actionsCell}
                {...focusableGroupAttr}
              >
                <TableCellLayout>
                  <Button icon={<DeleteFilled />} aria-label="Delete" />
                </TableCellLayout>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell role="gridcell" colSpan={columns.length}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <hr
                  style={{
                    flex: 1,
                    borderBottomColor: "#C7C7C7",
                  }}
                />
                <Button
                  style={{ backgroundColor: "#C7C7C7" }}
                  icon={<AddFilled color="white" />}
                  onClick={onAddRow}
                />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
