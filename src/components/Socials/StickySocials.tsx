import { Icon, useMediaQuery, List, ListItem, Link } from "@chakra-ui/react";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import { SocialItems } from "./SocialItems";

const size = "10";

export const StickySocials = () => {
  const [isSmallerThan850] = useMediaQuery([
    `.socials {
      display: none; 
    }`,
  ]);
  return (
    <List
      position="fixed"
      bottom="20"
      gap="6"
      display="grid"
      className="socials"
    >
      {isSmallerThan850 ? "smaller than 850" : "larger than 850"}
      {SocialItems.map((item) => {
        return (
          <ListItem>
            <Link href={item.href}>
              <Icon as={item.icon} w={size} h={size} key={item.href} />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};
