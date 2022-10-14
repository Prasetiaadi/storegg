/* eslint-disable jsx-a11y/alt-text */
import cx from 'classnames'
import Image from 'next/image';

interface MenuItemProps {
  title: string;
  icon: 'icon-menu-overview' | 'icon-menu-transaction' | 'icon-menu-settings' | 'icon-menu-reward' | 'icon-menu-card' | 'icon-menu-message' | 'icon-menu-logout'
  active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active } = props;
  const classItem = cx({
    'item': true,
    'mb-30': true,
    active,
  })

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}