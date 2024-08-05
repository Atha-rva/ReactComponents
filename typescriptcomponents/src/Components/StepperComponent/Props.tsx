type ZAccordionProps = {
    zpanels: AccordionPanelType[];
    className?: string;
    style?: any;
    zaccordionItemClassName?: string;
    zaccordionItemStyle?: any;
    zaacordionHeaderClassName?: string;
    zaacordionHeaderStyle?: any;
    zaccordionPanelClassName?: string;
    zaccordionPanelStyle?: any;
    isVisible?: boolean;
    disabled?: boolean;
  };
  
  type AccordionPanelType = {
    label: string;
    component: any;
    completeStatus: string;
    avatar: any;
    isActive?: boolean;
    disabled?: boolean;
  };
  
  export type { ZAccordionProps, AccordionPanelType };
  