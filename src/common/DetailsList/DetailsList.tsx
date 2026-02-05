import { ReactNode } from 'react';

import './DetailsList.css';

export interface Detail {
  label: string;
  value: ReactNode;
}

interface DetailsListProps {
  details: Detail[];
  className?: string;
}

const DetailsList = (props: DetailsListProps): JSX.Element => {
  const { details, className = '' } = props;

  return (
    <dl className={`details-list ${className}`.trim()}>
      {details.map((detail) => (
        <div key={detail.label} className="details-list__row">
          <dt className="details-list__label">{detail.label}:</dt>
          <dd className="details-list__value">{detail.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default DetailsList;
