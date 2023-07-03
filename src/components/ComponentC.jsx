import { useContext } from "react";
import { ChannelContext, UserContext } from "../App";
function ComponentC() {
  const userData = useContext(UserContext);
  const channelData = useContext(ChannelContext);
  return (
    <div>
      <h1>
        Hello {userData.username} My Job is {userData.position}
        Channel is {channelData}
      </h1>
    </div>
  );
}

export default ComponentC;
