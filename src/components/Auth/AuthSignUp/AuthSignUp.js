import React from "react";
import { 
        AuthWrapper, 
        SubTitle,
        JoginCard, 
        Container, 
        JoinButton, JoinTitle, LoginButton,IntegratedLogin,IntegratedText, SignUpContainer } from "../style/style";
import { Link } from "react-router-dom";
import AuthFooter from "../components/common/AuthFooter";

const AuthSignUp = ()=>{
    return(
        <>
        <AuthWrapper>
           <SignUpContainer>
                <JoinTitle>알바몬·잡코리아 통합 회원가입을 환영합니다.</JoinTitle>
                <Container>
                    <JoginCard>
                        <SubTitle>이력서를 등록하고 알바를 찾아보세요.</SubTitle>
                        <div className='join-column'>
                            <img 
                                src="https://contents.albamon.kr/monimg/msa/images/account/join_member.svg" 
                                alt='일반 회원가입 이미지'
                            />
                            <JoinButton color='white' bgColor='#ff501b'>
                                <Link to='/auth/signup-enterprise'>개인 회원가입</Link>
                            </JoinButton>
                        </div>
                    </JoginCard>
                    <JoginCard>
                            <SubTitle>공고를 등록하고 인재를 찾아보세요.</SubTitle>
                            <div className='join-column'>
                                <img 
                                    src="https://contents.albamon.kr/monimg/msa/images/account/join_corp.svg" alt='일반 회원가입 이미지'
                                />
                                <JoinButton color='white' bgColor='#171717'>
                                    <Link to='/auth/signup-enterprise'>개인 회원가입</Link>
                                </JoinButton>
                            </div>
                    </JoginCard>
                </Container>
                <IntegratedLogin>
                    <IntegratedText>
                        <span>알바몬에 회원가입을 하시면 하나의 아이디로 모든 잡코리아 운영사이트를 이용하실 수 있습니다.</span>
                        <span>이미 잡코리아 개인·기업회원으로 가입하신 분은 동일한 아이디와 비밀번호로 알바몬에 로그인 하실 수 있습니다.</span>
                    </IntegratedText>
                    <div>
                        <LoginButton>통합회원 로그인</LoginButton>
                    </div>
                </IntegratedLogin>
                
           </SignUpContainer>
        </AuthWrapper>
        <AuthFooter/>
        </>
    )
}
export default AuthSignUp;