import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  useTableFeatures,
  TableColumnDefinition,
  TableColumnId,
  useTableSort,
  TableCellLayout,
  createTableColumn,
  Button,
} from "@fluentui/react-components";
import { useStaticStyles, useStyles } from "./ZTableStyle";
import { zTableProps } from "./Props";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";
import Img0 from "./ChangeOrg.svg";
import { AddSquareFilled } from "@fluentui/react-icons";

const ZTable = React.forwardRef<HTMLTableElement, zTableProps>((props, ref) => {
  const {
    zheadings,
    zdata,
    zcolKeys,
    recordSize,
    headerClassName,
    rowClassName,
    emptyMessage,
    borderRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    onClickAdd,
    addRow,
  } = props;
  useStaticStyles();
  const columns: TableColumnDefinition<any>[] = [];
  Lato();
  const generateColumns = () => {
    zcolKeys.map((keyName, key) => {
      columns.push(
        keyName === "lastLog"
          ? createTableColumn<any>({
              columnId: keyName,
              compare: (a: any, b: any) => {
                const dateA = a[keyName].split("-");
                const dateB = b[keyName].split("-");

                const dayA = parseInt(dateA[0]);
                const monthA = parseInt(dateA[1]);
                const yearA = parseInt(dateA[2]);

                const dayB = parseInt(dateB[0]);
                const monthB = parseInt(dateB[1]);
                const yearB = parseInt(dateB[2]);

                if (yearA < yearB) {
                  return -1;
                } else if (yearA > yearB) {
                  return 1;
                } else {
                  if (monthA < monthB) {
                    return -1;
                  } else if (monthA > monthB) {
                    return 1;
                  } else {
                    if (dayA < dayB) {
                      return -1;
                    } else if (dayA > dayB) {
                      return 1;
                    } else {
                      return 0;
                    }
                  }
                }
              },
            })
          : addRow
          ? createTableColumn<any>({
              columnId: keyName,
            })
          : createTableColumn<any>({
              columnId: keyName,
              compare: (a: any, b: any) => {
                return a[keyName].localeCompare(b[keyName], "en", {
                  numeric: true,
                });
              },
            })
      );
    });
  };
  generateColumns();

  const {
    getRows,
    sort: { getSortDirection, toggleColumnSort, sort },
  } = useTableFeatures({ columns, items: zdata }, [
    useTableSort({
      defaultSortState: {
        sortColumn: zcolKeys[2],
        sortDirection: "ascending",
      },
    }),
  ]);

  const headerSortProps = (columnId: TableColumnId) => ({
    onClick: (e: React.MouseEvent) => {
      toggleColumnSort(e, columnId);
    },
    sortDirection: getSortDirection(columnId),
  });

  const styles = useStyles();

  const [pageIndex, setPageIndex] = React.useState(0);

  const handleNextPage = () => {
    setPageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevPage = () => {
    setPageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  let recordSizeLocal = recordSize || 0;
  let rows =
    recordSize === undefined
      ? sort(getRows())
      : sort(getRows()).slice(
          pageIndex * recordSizeLocal,
          (pageIndex + 1) * recordSizeLocal
        );

  return (
    <div
      style={{
        borderRadius: borderRadius || "10px",
        borderTopLeftRadius: borderTopLeftRadius || "0px",
        borderTopRightRadius: borderTopRightRadius || "0px",
        borderBottomLeftRadius: borderBottomLeftRadius || "0px",
        borderBottomRightRadius: borderBottomRightRadius || "0px",
        overflow: "hidden",
      }}
    >
      <Table ref={ref} sortable aria-label="Table with sort" {...props}>
        <TableHeader className={styles.TableHeader}>
          <TableRow className={headerClassName}>
            {zheadings.map((heading, key) => {
              return heading.sortable ? (
                <TableHeaderCell {...headerSortProps(zcolKeys[key])} key={key}>
                  {heading.label}&nbsp;&nbsp;
                  {heading.icon}
                </TableHeaderCell>
              ) : (
                <TableHeaderCell className={styles.TableHeaderCells} key={key}>
                  {heading.label}&nbsp;&nbsp;
                  {heading.icon}
                </TableHeaderCell>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody className={styles.TableBody}>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={zheadings.length}>
                <div className={styles.EmptyTableCell}>
                  {emptyMessage || "Table is empty"}
                </div>
              </TableCell>
            </TableRow>
          ) : (
            rows.map(({ item }, rowKey) => (
              <TableRow key={rowKey} className={rowClassName}>
                {zcolKeys.map((keyName, colKey) => (
                  <TableCell key={colKey}>
                    {keyName === "status" ? (
                      <TableCellLayout
                        className={styles.TableCellLayout}
                        media={
                          item[keyName] === "Active" ? (
                            <img src={Img0} alt="Active" />
                          ) : item[keyName] === "Draft" ? (
                            <img src={Img0} alt="Draft" />
                          ) : item[keyName] === "Pending" ? (
                            <img src={Img0} alt="Pending" />
                          ) : item[keyName] === "Rejected" ? (
                            <img src={Img0} alt="Rejected" />
                          ) : (
                            item[keyName]
                          )
                        }
                      />
                    ) : (
                      <TableCellLayout>{item[keyName]}</TableCellLayout>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
          {addRow && (
            <TableRow>
              <TableCell colSpan={zheadings.length}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <hr style={{ width: "95vw" }} />
                  <AddSquareFilled width={20} onClick={onClickAdd} />
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {zdata.length > recordSizeLocal && recordSize && (
        <div>
          <Button onClick={handlePrevPage} disabled={pageIndex === 0}>
            Previous
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={(pageIndex + 1) * recordSizeLocal >= zdata.length}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
});
export { ZTable };
