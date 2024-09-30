import { Part } from "@/interfaces/member/memberBox";

export const MEMBERS = [
    {
        nickname: "민콩", /// 본인의 닉네임
        name: "최민경", /// 본인의 이름
        part: Part.SPRINGBOOT, /// 본인의 파트
        profile_img_url: "/assets/images/members/default_profile_img.png", /// 본인의 프로필 사진, 동일한 경로로 설정해주세요.
        title: "description", /// 본인의 한 줄 소개
        redirect_url: "https://github.com", /// 프로필 클릭 시 이동할 경로
    },
    {
        nickname: "은별",
        name: "정은지",
        part: Part.운영진,
        profile_img_url: "/assets/images/members/eunji_profile.png",
        title: "안녕하세요. umc 부회장 정은지입니다. :)",
        redirect_url: "https://github.com/bianbbc87",
    },
]