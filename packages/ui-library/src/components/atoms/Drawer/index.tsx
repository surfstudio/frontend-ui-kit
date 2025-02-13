import { ReactNode, useEffect, useRef } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}

export const Drawer = ({
  isOpen,
  onClose,
  header,
  content,
  footer,
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="drawerOverlay" />
      <div ref={drawerRef} className="drawerContainer">
        {header && <div className="drawerHeaderContainer">{header}</div>}
        {content && <div className="drawerContentContainer">{content}</div>}
        {footer && <div className="drawerFooterContainer">{footer}</div>}
      </div>
    </>
  );
};
