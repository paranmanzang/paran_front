import { UserModel } from "@/app/model/user/user.model";
import { AppDispatch } from "@/lib/store";
import {logoutUser, saveError, saveLoading, saveSuccess, saveUserDetail, saveUserList} from "@/lib/features/users/user.Slice";
import userAPI from "@/app/api/generate/user.api";


// 사용자 등록
export const addUser = async (userModel: UserModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await userAPI.createUserAPI(userModel);

        if ('id' in response.data && 'nickname' in response.data) {
            dispatch(saveSuccess("사용자가 성공적으로 등록되었습니다."));
        } else {
            throw new Error('사용자 등록 실패');
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "사용자 등록 중 오류 발생했습니다.";
        dispatch(saveError(errorMessage));
        console.error('Error adding user:', errorMessage);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 비밀번호 수정
export const updatePassword = async (nickname: string, newPassword: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await userAPI.updatePasswordAPI(nickname, newPassword);

        if (response.status === 200) {
            dispatch(saveSuccess("비밀번호가 성공적으로 수정되었습니다."));
        } else {
            throw new Error('비밀번호 수정 실패');
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "비밀번호 수정 중 오류 발생했습니다.";
        dispatch(saveError(errorMessage));
        console.error('Error updating password:', errorMessage);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 권한 수정
export const updateRole = async (nickname: string, newRole: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await userAPI.updateRoleAPI(nickname, newRole);

        if (response.status === 200) {
            dispatch(saveSuccess("권한이 성공적으로 수정되었습니다."));
        } else {
            throw new Error('권한 수정 실패');
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "권한 수정 중 오류 발생했습니다.";
        dispatch(saveError(errorMessage));
        console.error('Error updating role:', errorMessage);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 신고횟수 추가
export const updateDeclaration = async (nickname: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await userAPI.updateDeclarationAPI(nickname);

        if (response.status === 200) {
            dispatch(saveSuccess("신고횟수가 성공적으로 추가되었습니다."));
        } else {
            throw new Error('신고횟수 추가 실패');
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "신고횟수 추가 중 오류 발생했습니다.";
        dispatch(saveError(errorMessage));
        console.error('Error updating declaration count:', errorMessage);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 사용자 리스트 조회
export const getAllUsers = async (nickname: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await userAPI.getAllUserAPI(nickname);

        if (Array.isArray(response.data)) {
            dispatch(saveUserList(response.data)); // 사용자 리스트를 저장하는 액션
        } else {
            throw new Error('사용자 목록 조회 실패');
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "사용자 목록 조회 중 오류 발생했습니다.";
        dispatch(saveError(errorMessage));
        console.error('Error fetching all users:', errorMessage);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 사용자 상세정보 조회
export const getUserDetail = async (nickname: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true)); // 로딩 상태 시작
        const response = await userAPI.getDetailUserAPI(nickname);

        // API 응답이 UserModel 타입인지 확인
        if (response.data && typeof response.data === 'object') {
            const userDetail: UserModel = response.data;
            dispatch(saveUserDetail(userDetail)); // 사용자 상세정보를 저장하는 액션
        } else {
            throw new Error('사용자 상세정보 조회 실패: 잘못된 응답 형식입니다.');
        }
    } catch (error: any) {
        // 에러 메시지 정의
        const errorMessage = error.response?.data?.message || "사용자 상세정보 조회 중 오류 발생했습니다.";
        dispatch(saveError(errorMessage)); // 에러 메시지 저장
        console.error('Error fetching user detail:', errorMessage, error); // 에러 로그 출력
    } finally {
        dispatch(saveLoading(false)); // 로딩 상태 종료
    }
};

// 권한 확인
export const checkRole = async (nickname: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true)); // 로딩 상태 시작
        const response = await userAPI.checkRoleAPI(nickname); // 사용자 권한 확인 API 호출

        if (response.data) {
            dispatch(saveSuccess("확인 완료")); // 권한 정보를 저장하는 액션
        } else {
            throw new Error('권한 확인 실패');
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "권한 확인 중 오류 발생했습니다.";
        dispatch(saveError(errorMessage)); // 에러 메시지를 저장
        console.error('Error checking role:', errorMessage); // 에러 로그 출력
    } finally {
        dispatch(saveLoading(false)); // 로딩 상태 종료
    }
};

// 회원 탈퇴
export const deleteUser = async (nickname: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await userAPI.deleteUserAPI(nickname);

        if (response.status === 200) {
            dispatch(saveSuccess("사용자가 성공적으로 삭제되었습니다."));
        } else {
            throw new Error('회원 탈퇴 실패');
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "회원 탈퇴 중 오류 발생했습니다.";
        dispatch(saveError(errorMessage));
        console.error('Error deleting user:', errorMessage);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 닉네임 중복 확인
export const checkNickname = async (userModel: UserModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await userAPI.checkNickname(userModel);

        if (response.data) {
            dispatch(saveSuccess("닉네임 사용 가능."));
        } else {
            throw new Error('닉네임 중복 확인 실패');
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "닉네임 중복 확인 중 오류 발생했습니다.";
        dispatch(saveError(errorMessage));
        console.error('Error checking nickname:', errorMessage);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 비밀번호 확인
export const checkPassword = async (userModel: UserModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await userAPI.checkPassword(userModel);

        if (response.data) {
            dispatch(saveSuccess("비밀번호 확인 성공."));
        } else {
            throw new Error('비밀번호 확인 실패');
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "비밀번호 확인 중 오류 발생했습니다.";
        dispatch(saveError(errorMessage));
        console.error('Error checking password:', errorMessage);
    } finally {
        dispatch(saveLoading(false));
    }
};
// 로그아웃 시간을 업데이트하는 함수
export const updateLogoutTime = (nickname: string) => async (dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true)); // 로딩 시작
        await userAPI.logoutTimeAPI(nickname); // 로그아웃 시간 API 호출
        dispatch(logoutUser(nickname)); // 로그아웃 사용자 상태 업데이트
    } catch (error: any) {
        dispatch(saveError("로그아웃 시간 업데이트 중 오류 발생했습니다."));
        console.error('Error updating logout time:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false)); // 로딩 종료
    }
};