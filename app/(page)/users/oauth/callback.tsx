import { useEffect } from 'react';
import { useAppDispatch } from '@/lib/store';
import { loginService } from '@/app/service/user/login.service';

const OauthCallback = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleCallback = async () => {
            try {
                console.log("OAuth 콜백 처리 시작");
                await loginService.handleOAuthCallback(dispatch);
                console.log("OAuth 콜백 처리 완료");
            } catch (error) {
                console.error('OAuth 콜백 처리 중 오류:', error);
            }
        };

        handleCallback();
    }, [dispatch]);

    return <div>로그인 처리 중입니다…</div>;
};

export default OauthCallback;