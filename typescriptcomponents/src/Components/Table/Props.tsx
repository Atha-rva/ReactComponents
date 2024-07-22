import { TableProps, TableHeaderProps } from "@fluentui/react-components";
type zTableProps = TableProps &
  TableHeaderProps & {
    headerClassName?: string;
    rowClassName?: string;
    zheadings: { label: any; icon?: JSX.Element; sortable?: boolean }[];
    zdata: any[];
    zcolKeys: any[];
    recordSize?: number;
    emptyMessage?: string;
    borderRadius?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
    addRow?: boolean;
    onClickAdd?: () => any;
  };
export type { zTableProps };
