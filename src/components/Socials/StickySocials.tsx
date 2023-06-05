import { Icon, List, ListItem, Link } from "@chakra-ui/react";

import { SocialItems } from "./SocialItems";

const size = 10;
export const StickySocials = () => {
  return (
    <List
      position="fixed"
      bottom="20"
      gap="6"
      display={{ base: "none", lg: "grid" }}
      className="socials"
    >
      {SocialItems.map((item) => {
        return (
          <ListItem key={item.href}>
            <Link
              href={item.href}
              _hover={{
                color: "#A970FF",
              }}
            >
              <Icon as={item.icon} w={size} h={size} />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};
