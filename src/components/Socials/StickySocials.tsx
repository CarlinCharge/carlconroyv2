import { Icon, List, ListItem, Link } from "@chakra-ui/react";

import { SocialItems } from "./SocialItems";

const size = { base: 5, lg: 10 };
export const StickySocials = () => {
  return (
    <List
      position={{ base: "fixed", lg: "fixed" }}
      bottom="20"
      gap="6"
      display={{ base: "block", lg: "grid" }}
      className="socials"
    >
      {SocialItems.map(({ href, icon }) => {
        return (
          <ListItem key={href}>
            <Link
              href={href}
              _hover={{
                color: "#A970FF",
              }}
            >
              <Icon as={icon} w={size} h={size} />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};
