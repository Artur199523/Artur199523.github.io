import React, {useState} from "react";
import "./style.scss"
import ModalWindow from "../../atoms/ModalWindow";
import {svg} from "../../../assets/svg";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import AddressCopyButton from "../../atoms/AddressCopyButton/addressCopyButton";

const ProfileSettingModal = ({isOpenSetting,setIsOpenSetting,address,account,type}) =>{
    const [settingsFields,setSettingsField] = useState({"display name":"","user name":"","email":"","new password":"","confirm password":""})

    const settingsFiledHandle = (e) =>{
        let {name,value} = e.target
        const copy = {...settingsFields}

        setSettingsField({...copy,[name]:value})
    }

    return(
        <ModalWindow show={isOpenSetting} closeClick = {setIsOpenSetting} isShowClose={true} type={"window-lg_margin"}>
            <div className="profile-settings">
                <h1>Profile Settings</h1>
                <div className="profile-settings_avatar">
                    <div className="profile-settings_avatar_img">
                        <img alt="" src={svg.Avatar}/>
                        <span><img src={svg.EditAvatar} alt=""/></span>
                    </div>
                    <h2 className="profile-settings_avatar_name">Justin</h2>
                    <div className="profile-settings_avatar_address">
                       <AddressCopyButton
                           address={address}
                           account={account}
                       />
                    </div>
                </div>
                <div className="profile-settings_fields">
                        <Input
                            view={"inp inp-black inp-sm"}
                            type={"text"}
                            label={"display name"}
                            name="display name"
                            onChange={settingsFiledHandle}
                            value={settingsFields["display name"]}
                        />
                        <Input
                            view={"inp inp-black inp-sm"}
                            type={"text"}
                            label={"user name"}
                            name="user name"
                            onChange={settingsFiledHandle}
                            value={settingsFields["user name"]}
                        />
                        <Input
                            view={"inp inp-black inp-sm"}
                            type={"email"}
                            label={"email address"}
                            name="email"
                            onChange={settingsFiledHandle}
                            value={settingsFields["email"]}
                        />
                        <p>Connect your email to receive our weekly newsletter! Check your email for a link to verify.</p>
                    <div className="profile-settings_fields_password">
                        <h1>Change Password</h1>
                            <Input
                                view={"inp inp-black inp-sm"}
                                type={"password"}
                                label={"new password"}
                                name="new password"
                                onChange={settingsFiledHandle}
                                value={settingsFields["new password"]}
                                isIcon={true}
                                iconDefault={svg.PasswordClose}
                                iconTwo={svg.PasswordOpen}
                                changeIcon={true}
                            />
                        <Input
                            view={"inp inp-black inp-sm"}
                            type={"password"}
                            label={"confirm password"}
                            name="confirm password"
                            onChange={settingsFiledHandle}
                            value={settingsFields["confirm password"]}
                            isIcon={true}
                            iconDefault={svg.PasswordClose}
                            iconTwo={svg.PasswordOpen}
                            changeIcon={true}

                        />
                    </div>
                </div>
                <div className="profile-settings_fields_password_btn-block">
                    <Button
                        type={"gold"}
                        text={"submit"}
                        onClick={()=>alert()}
                    />
                </div>
            </div>
        </ModalWindow>
    )
}
export default ProfileSettingModal