import React from 'react'

interface ListComponentProps {
  listItems: string[];
  listType: 'ordered' | 'unordered';
  style?: React.CSSProperties;
  outerStyle?: React.CSSProperties;
  listStyle?: React.CSSProperties;
}

const ListComponent: React.FC<ListComponentProps> = ({ 
  listItems = [], 
  listType = 'unordered', 
  style, 
  outerStyle,
  listStyle 
}) => {
  return (
    <div style={outerStyle}>
      {listType === 'ordered' ? (
        <ol style={style}>
          {listItems.map((item: string, index: number) => (
            <li key={index} style={listStyle}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul style={style}>
          {listItems.map((item: string, index: number) => (
            <li key={index} style={listStyle}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListComponent