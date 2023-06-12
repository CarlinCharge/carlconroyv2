import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  display: any;
}
export default function BurgerNav({
  isOpen,
  onToggle,
  display,
  ...rest
}: Props) {
  if (!isOpen) {
    return (
      <IconButton
        variant="primary"
        aria-label="Open"
        onClick={onToggle}
        display={display}
        {...rest}
        icon={<HamburgerIcon />}
      />
    );
  } else {
    return (
      <IconButton
        variant="primary"
        aria-label="Close"
        onClick={onToggle}
        display={display}
        icon={<CloseIcon />}
      />
    );
  }
}
