import * as React from "react";
import {
  FolderRegular,
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentPdfRegular,
  VideoRegular,
  DeleteRegular,
} from "@fluentui/react-icons";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  PresenceBadgeStatus,
  Avatar,
  Button,
  useArrowNavigationGroup,
  useFocusableGroup,
} from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  cell: {
    borderRight: "1px solid #ccc",
  },
  lastCell: {
    borderRight: "none",
    width: "100px",
    maxWidth: "100px",
  },
  actionsCell: {
    width: "100px",
    maxWidth: "100px",
  },
});

const items = [
  {
    file: { label: "Meeting notes", icon: <DocumentRegular /> },
    author: { label: "Max Mustermann", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular />,
    },
  },
  {
    file: { label: "Thursday presentation", icon: <FolderRegular /> },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    file: { label: "Training recording", icon: <VideoRegular /> },
    author: { label: "John Doe", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    file: { label: "Purchase order", icon: <DocumentPdfRegular /> },
    author: { label: "Jane Doe", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <PeopleRegular />,
    },
  },
];

const columns = [
  { columnKey: "file", label: "File" },
  { columnKey: "author", label: "Author" },
  { columnKey: "lastUpdated", label: "Last updated" },
  { columnKey: "lastUpdate", label: "Last update" },
];

export const FocusableElementsInCells = () => {
  const classes = useStyles();
  const keyboardNavAttr = useArrowNavigationGroup({ axis: "grid" });
  const focusableGroupAttr = useFocusableGroup({
    tabBehavior: "limited-trap-focus",
  });

  return (
    <Table
      {...keyboardNavAttr}
      role="grid"
      aria-label="Table with grid keyboard navigation"
      style={{ minWidth: "620px" }}
    >
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column.columnKey} className={classes.cell}>
              {column.label}
            </TableHeaderCell>
          ))}
          <TableHeaderCell className={classes.actionsCell}>
            Actions
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.file.label}>
            <TableCell tabIndex={0} role="gridcell" className={classes.cell}>
              <TableCellLayout media={item.file.icon}>
                {item.file.label}
              </TableCellLayout>
            </TableCell>
            <TableCell tabIndex={0} role="gridcell" className={classes.cell}>
              <TableCellLayout
                media={
                  <Avatar
                    aria-label={item.author.label}
                    name={item.author.label}
                    badge={{
                      status: item.author.status as PresenceBadgeStatus,
                    }}
                  />
                }
              >
                {item.author.label}
              </TableCellLayout>
            </TableCell>
            <TableCell tabIndex={0} role="gridcell" className={classes.cell}>
              {item.lastUpdated.label}
            </TableCell>
            <TableCell tabIndex={0} role="gridcell" className={classes.cell}>
              <TableCellLayout media={item.lastUpdate.icon}>
                {item.lastUpdate.label}
              </TableCellLayout>
            </TableCell>
            <TableCell
              role="gridcell"
              tabIndex={0}
              className={classes.actionsCell}
              {...focusableGroupAttr}
            >
              <TableCellLayout>
                <Button icon={<EditRegular />} aria-label="Edit" />
                <Button icon={<DeleteRegular />} aria-label="Delete" />
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
