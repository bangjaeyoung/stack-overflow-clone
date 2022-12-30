import styled from "styled-components";
import DeleteProfile from "./DeleteProfile";
import EditProfile from "./EditProfile";

const Wrapper = styled.div`
    display:flex;

    .buttonClicked {
        background-color: #F1F2F3;
        box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
        }
`

const StyledButton = styled.button`
        display:flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;
        width: 150px;
        height: 30px;
        margin: 0px 60px 15px 0px;
        background-color: white;
        border-radius: 10px;
        cursor: pointer;
`

const Settings = ({settingBtn, setSettingBtn, userData, changeNickname, setChangeNickname, changePwd, setChangePwd}) => {
    return (
        <Wrapper>
            <div>
                <StyledButton className={settingBtn === 0 ? "buttonClicked" : null} onClick={(e) => setSettingBtn(0)}>Edit profile</StyledButton>
                <StyledButton className={settingBtn === 1 ? "buttonClicked" : null} onClick={(e) => setSettingBtn(1)}>Delete profile</StyledButton>
            </div>
            <div>
                {
                    settingBtn === 0 ? <EditProfile changePwd={changePwd} setChangePwd={setChangePwd} userData={userData} changeNickname={changeNickname} setChangeNickname={setChangeNickname} /> : <DeleteProfile />
                }
            </div>
        </Wrapper>
    )
}

export default Settings;