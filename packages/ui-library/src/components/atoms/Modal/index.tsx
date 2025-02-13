import cn from "classnames";
import type { CSSProperties, KeyboardEvent, ReactNode } from "react";
import { useEffect, useRef } from "react";
import close24 from "../../../assets/close24.svg";
import Tg from "../Typography";

import cls from "./Modal.module.scss";

export type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  onCancel: () => void;
  cancelText?: ReactNode;
  okText?: ReactNode;
  title?: string;
  width?: CSSProperties["width"];
  isCloseIcon?: boolean;
  centered?: boolean;
};

const Modal = (props: ModalProps) => {
  const {
    isOpen,
    onCancel,
    children,
    title,
    width = 520,
    isCloseIcon = true,
    centered = false,
  } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (["Escape"].includes(e.key)) {
      onCancel();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      dialogRef?.current?.showModal();

      modalRef?.current?.focus();
    } else {
      document.body.style.overflow = "";
      dialogRef?.current?.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={cn(cls.modalOverlay, { [cls.notOpen]: !isOpen })}
      onClick={onCancel}
    >
      <div
        ref={modalRef}
        className={cn(cls.modalLayout, { [cls.centered]: centered })}
        style={{ width }}
        role="button"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cls.modalContent}>
          <header className={cls.modalHeader}>
            <Tg.Title level={4} fontWeight={"bold"} color="black">
              {title}
            </Tg.Title>
            {isCloseIcon && (
              <button className={cls.close} onClick={onCancel}>
                <img src={close24} alt={"close"} />
              </button>
            )}
          </header>
          <div className={cls.container}>{children}</div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
