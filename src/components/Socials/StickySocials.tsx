import { Icon, Grid, List, ListItem, Link } from "@chakra-ui/react";
import { SocialItems } from "./SocialItems";

const size = "10";
export const StickySocials = () => {
  return (
    <List position="fixed" bottom="20" gap="6" display="grid">
      {SocialItems.map((item) => {
        return (
          <ListItem>
            <Link>
              <Icon as={item.icon} w={size} h={size} key={item.href} />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};
