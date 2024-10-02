//user 정보 가져오기
import { UserModel } from "@/app/model/user.model";
import { AppDispatch } from "@/lib/store";
import { getCurrentUser } from "@/lib/features/user.Slice";

export const getUser = async (userNickname: UserModel, dispatch: AppDispatch
): Promise<void> => {
  try{
    dispatch.getCurrentUser
  }catch{

  }
    const response = await fetch(`/api/user/${userNickname}`);
    const data = await response.json();
    setUserData(data);
  }

  fetchUserData();
}, [userNickname]);