import { GroupList } from "components/organisms/groupList";
import { useRouter } from "next/router";
import React, { FC } from "react";

export const GroupListContainer: FC = () => {
  const router = useRouter();

  const handleCardAddButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    router.push("/group/add");
  };

  return <GroupList handleCardAddButtonClick={handleCardAddButtonClick} />;
};
