interface ModalType {
  render(): HTMLElement[] | void;
  show(type?: string): void;
  close(type?: string): void;
}

export { ModalType };
