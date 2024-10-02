"use client"
import Link from "next/link";
import Image from "next/image";
import Naver from "@/app/assets/btnG.png"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "@/lib/store";
import { useSelector } from "react-redux";
import { getError, getIsLoading } from "@/lib/features/group/book.slice";
import { login, oauth } from "@/app/service/user/login.service";
import { likeBookService } from "@/app/service/group/likeBook.service";

export default function Login() {
    const dispatch = useAppDispatch()
    const loading = useSelector((state: RootState) => getIsLoading(state));
    const error = useSelector((state: RootState) => getError(state));
    const nickname = 'A' // 임의로 넣어둠
    const route = useRouter();
    const goBack = () => {
        route.back();
    }

    const useLogin = () => {
        login("cjswodmstjr@gmail.com", "QWER123$").then(data => {
            console.log("로그인: ", data)
        })
        // 로그인 하면 개인 정보 다 가져와야해요~~~~
        useEffect(() => {
            likeBookService.findByNickname(nickname, dispatch)
        }, [dispatch, nickname]);
    }
    const moveToOath = () => {
        const oauthUrl = process.env.NEXT_PUBLIC_OAUTH_URL; // 환경변수에서 URL 가져오기
        if (oauthUrl) {
            const response = oauth(oauthUrl); // URL을 전달하여 oauth 함수 호출
        }
    };
    return (
        <div className="mx-auto my-6 max-w-lg rounded-lg border p-6 shadow">
            {/* <form> */}
            <div className="mb-5">
                <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-gray-900"
                >
                    ID
                </label>
                <input
                    type="username"
                    id="username"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                    placeholder="ID를 입력해주세요"
                    required
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900"
                >
                    비밀번호
                </label>
                <input
                    type="password"
                    id="password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                    placeholder="비밀번호"
                    required
                />
            </div>
            <button
                type="submit"
                className="mx-2 w-full rounded-lg border-2 border-green-400 bg-green-400 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-green-300"
                onClick={useLogin}
            >
                로그인
            </button>
            <button
                type="button"
                onClick={goBack}
                className="w-full rounded-lg border-2 border-green-400 bg-white px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-green-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300"
            >
                뒤로가기
            </button>
            <Link href="/users/register" className="mx-3">
                처음이시라면 회원가입{"(*Ü*)ﾉ"}
            </Link>

            {/* </form> */}

            <hr className="my-2" />

            <div className="mx-auto my-4 max-w-lg">
                <button
                    type="button"
                    className="mb-2 flex w-full items-center rounded-lg border-2 border-[#03c75a] bg-white px-5 py-2.5 text-sm font-medium text-[#03c75a] hover:bg-[#03c75a] hover:text-white"
                    onClick={() => moveToOath()}
                >
                    <Image
                        src={Naver}
                        alt="cat"
                        width={40}
                    />
                    <span className="mx-5">네이버로 로그인</span>
                </button>
            </div>
        </div>
    );
}
;
