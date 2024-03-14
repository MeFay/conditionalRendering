import { FC } from "react";
import { StyledUserGreeting } from "./styles.tsx";

type UserGreetingProps = {
  isLoggedIn: boolean;
  username: string;
};

const UserGreeting: FC<UserGreetingProps> = ({
  isLoggedIn = true,
  username = "Minder",
}) => {
  const welcomeMessage = (
    <StyledUserGreeting>Welcome {username}</StyledUserGreeting>
  );
  const loginMessage = (
    <StyledUserGreeting>Please log in to continue</StyledUserGreeting>
  );
  return isLoggedIn ? welcomeMessage : loginMessage;
};

export default UserGreeting;
