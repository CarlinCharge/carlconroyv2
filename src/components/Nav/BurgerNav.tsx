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
    return <HamburgerIcon onClick={onToggle} display={display} {...rest} />;
  } else {
    return <CloseIcon onClick={onToggle} display={display} {...rest} />;
  }
}
