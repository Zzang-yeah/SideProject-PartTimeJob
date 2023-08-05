import React from "react";
import { CheckBox, CheckBoxWrap, CheckLabel, Choice, Esential, AgreementCard, InfoCard, AgreementText } from "./style";
import { Title } from "../commonStyle";


const Agreement = ({ title }) => {
    return (
        <>
            <Title>{title}</Title>
            <InfoCard>
                <AgreementCard>
                    <AgreementText>약관동의</AgreementText>
                    <CheckBoxWrap active='true' >
                        <CheckBox type="checkbox" id='essential' />
                        <CheckLabel className='first-checked'>
                            <label className="first-label" htmlFor="essential">
                                필수동의 항목 및 개인정보수집 및 이용 동의-마케팅(선택),<br />
                                광고성 정보 수신 동의(선택)에 전체 동의합니다.
                            </label>
                        </CheckLabel>
                    </CheckBoxWrap>

                    <Esential>
                        <CheckBoxWrap>
                            <CheckBox type="checkbox" id='15up' />
                            <CheckLabel>
                                <label htmlFor="15up">
                                    <span className="essential">(필수)</span>
                                    <span> 만 15세 이상입니다.</span>
                                </label>
                            </CheckLabel>
                        </CheckBoxWrap>


                        <CheckBoxWrap>
                            <CheckBox type="checkbox" id='service' />
                            <CheckLabel>
                                <label htmlFor="service">
                                    <span className="essential">(필수)</span>
                                    <span>서비스 이용약관 동의</span>
                                </label>
                            </CheckLabel>
                        </CheckBoxWrap>

                        <CheckBoxWrap>
                            <CheckBox type="checkbox" id='info' />
                            <CheckLabel>
                                <label htmlFor="info">
                                    <span className="essential">(필수)</span>
                                    <span>개인정보 수집 및 이용동의</span>
                                </label>
                            </CheckLabel>
                        </CheckBoxWrap>
                    </Esential>
                    <Choice>
                        <CheckBoxWrap>
                            <CheckBox type="checkbox" id='info' />
                            <CheckLabel>
                                <label htmlFor="info">
                                    <span className="essential">(선택)</span>
                                    <span> 개인정보수집 및 이용 동의-마케팅</span>
                                </label>
                            </CheckLabel>
                        </CheckBoxWrap>
                        <CheckBoxWrap>
                            <CheckBox type="checkbox" id='info' />
                            <CheckLabel>
                                <label htmlFor="info">
                                    <span className="essential">(선택)</span>
                                    <span> 광고성 정보 이메일/SMS 수신 동의</span>
                                </label>
                            </CheckLabel>
                        </CheckBoxWrap>
                    </Choice>
                </AgreementCard>
            </InfoCard>
        </>

    )
}

export default Agreement;