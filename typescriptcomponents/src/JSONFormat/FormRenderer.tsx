import React from 'react';
import { RadioBtn } from './RadioBtn';

const handleEvent = (eventType: string, params: any) => {
  console.log(`${eventType} triggered`, params);
};

const renderElement = (element: any) => {
  const events = element.events?.reduce((acc: any, event: any) => {
    if (event.onChange) {
      acc.onChange = (params: any) => handleEvent('onChange', params);
    }
    if (event.onBlur) {
      acc.onBlur = (params: any) => handleEvent('onBlur', params);
    }
    return acc;
  }, {});

  switch (element.control) {
    case 'zRadioBtn':
      return (
        <RadioBtn
          ZGlobalLabel={element.label}
          Zlabel={element.options || []}
          className={element.className}
          Radioclass={element.Radioclass}
          RadioGroupclass={element.RadioGroupclass}
          {...events}
        />
          );
      

    default:
      return null;
  }
};

const renderSection = (section: any) => (
  <div key={section.id} className={section.layout || ''}>
    {section.elements?.map((elem: any) => (
      <div key={elem.id} style={{ gridColumn: `span ${elem.spanColunmns}` }}>
        {renderElement(elem)}
      </div>
    ))}
  </div>
);

export const FormRenderer: React.FC<{ template: any }> = ({ template }) => {
  const elements = template?.uilayout?.elements || [];
  return (
    <div>
      {elements.map((section: any) => renderSection(section))}
    </div>
  );
};
