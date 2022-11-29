import React from 'react'
import './Skills.scss'
import { Person, Mail, Home } from "@material-ui/icons";
import AWSIcon from "react-aws-icons/dist/aws/logo/AWS";
import ComputerIcon from '@mui/icons-material/Computer';

export default function Skills(){
    return (
        <div className="Skills" id="Skills">
            <div className="WebDev">
                <div><ComputerIcon className="icon" /></div>
                <div className="title"> Web Development </div>
                <div className="paragraph"> Front End Development </div>
                <div className="frontend_tools">
                    <ul>
                        <li> React js </li>
                        <li> HTML </li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="paragraph"> Application Programming Interface </div>
                <div className="tools">
                    <ul>
                        <li> Rest API </li>
                        <li> graphQL </li>
                    </ul>
                </div>
                <div className="paragraph"> Programming languages i speak</div>
                <div className="tools">
                    <ul>
                        <li> Python </li>
                        <li> Java </li>
                        <li> C++ </li>
                        <li> C </li>
                        <li> PHP </li>
                    </ul>
                </div>
                <div className="paragraph"> Databases Managment System </div>
                <div className="tools">
                    <ul>
                        <li> Mysql, mongoDB </li>
                    </ul>
                </div>

            </div>
            <div className="DevOps">
                <div className="icon">
                    <img src={require('../../assets/devops.png')}/>
                </div>
                <div className="title"> DevOps </div>
                <div className="paragraph"> Experienced in DevOps principals and tools</div>
                <div className="tools">
                    <ul>
                        <li> Kubernetes </li>
                        <li> Docker </li>
                        <li> Helm </li>
                        <li> CircleCI </li>
                        <li> Terraform </li>
                        <li> Jenkins </li>
                    </ul>
                </div>
            </div>
            <div className="Cloud">
                <div><AWSIcon className="aws_icon"  size={80}/></div>
                <div className="title"> Cloud Computing Platform </div>
                <div className="paragraph">  Experienced in Cloud Computing Platform (AWS) services</div>
                <div className="tools">
                    <ul>
                        <li> EKS </li>
                        <li> EC2 </li>
                        <li> RDS </li>
                        <li> ECR </li>
                        <li> S3 </li>
                        <li> Secret Manager </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
