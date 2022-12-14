import React from 'react';
import cx from 'classnames';

interface TableRowProps {
  title: string;
  item: number;
  price: number;
  categori: string;
  status: 'pending' | 'success' | 'failed';
  image: string;
}

export default function TableRow(props: TableRowProps) {
  const { title, image, item, price, status, categori } = props;

  const statusClass = cx({
    'float-start icon-status': true,
    pending: status === 'pending',
    success: status === 'success',
    failed: status === 'failed',
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width={80}
          height={80}
          alt="game thumb"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{categori}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price} Gold</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
        </div>
      </td>
    </tr>
  );
}
