import { ReactNode, ComponentType, AnchorHTMLAttributes } from 'react';
import cls from './Breadcrumbs.module.scss';
import cn from 'classnames';

type TLinkComponent = ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;

type TBreadcrumbsProps = {
    items: Array<{ label: string; href: string }>;
    LinkComponent?: TLinkComponent;
    backIcon?: ReactNode;
};

const Breadcrumbs = ({ items, backIcon, LinkComponent = 'a' as unknown as TLinkComponent }: TBreadcrumbsProps) => {
    const { length } = items;

    if (length < 2) return null;

    return (
        <div className={cls.breadcrumbs}>
            <LinkComponent href={items[length - 2].href} className={cn(cls.link, cls.back)}>
                {backIcon} BACK
            </LinkComponent>
            <LinkComponent href={items[length - 1].href} className={cn(cls.link, cls.back, cls.mobile)}>
                {backIcon}
                {items[length - 1].label}
            </LinkComponent>
            <div className={cls.items}>
                {items.map(({ label, href }) => (
                    <LinkComponent href={href} key={href} className={cn(cls.link, cls.item)}>
                        {label}
                    </LinkComponent>
                ))}
            </div>
        </div>
    );
};

export default Breadcrumbs;
