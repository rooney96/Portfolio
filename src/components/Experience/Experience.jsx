import React from 'react'
import './Experience.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';

export default function Experience(){
    return (
        <div className="Experience" id="Experience">
            <VerticalTimeline
                lineColor='#4169E1'
                className="VerticalTimeline"

            >
                <VerticalTimelineElement
                    className="Education"
                    contentStyle={{ background: '#4169E1', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: '#4169E1', color: '#fff' }}

                    icon={<SchoolIcon />}
                >
                    <h3 className="job-title">Education<br/> 2016 - 2021</h3>
                    <h4 className="job-discription">Technion - Israel Institue of Technology</h4>
                    <p style={{ 'font-size': '17px'}}> Bachelor's degree, Computer Science </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="Internship"
                    iconStyle={{ background: '#3bedb7', color: '#fff' }}
                    contentStyle={{ background: '#3bedb7', color: '#000' }}
                    icon={<ComputerIcon />}
                >
                    <h3 className="job-title">Production Engineer Intern <br/> july 2020 - October 2020</h3>
                    <h4 className="job-discription">Meta Platforms</h4>
                    <p style={{ 'font-size': '17px'}}>
                        Executed project under monitoring of Meta experienced engineer.
                        The project was to build an analyzer which aimed to improve the debugging experience,
                        By displaying analysis when alert pops up.
                        Once an alert is fired the analyzer runs and gather data from different resources
                        and displays what could be the issue.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="Full-time-job"
                    dateClassName={'Date'}
                    iconStyle={{ background: '#4169E1', color: '#fff' }}
                    contentStyle={{ background: '#4169E1', color: '#fff' }}
                    icon={<ComputerIcon />}
                >

                    <h3 className="job-title">Production Engineer <br/> 2021 - Now</h3>
                    <h4 className="job-discription">
                        Meta Platforms<br/>
                        Collaborated with differnet teams and played a critical rule in
                        maintaining and scaling their services, By:
                    </h4>
                    <ul>
                        <li> Provisioning and maintaining the infrastructure. </li><br/>
                        <li> Automate service deployment by designing & building CI/CD pipelines. </li><br/>
                        <li> Support logging and monitoring, to insure services health. </li><br/>
                        <li> Support testing (E2E, Unit test) to increase code effeciency. </li><br/>
                    </ul>

                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
