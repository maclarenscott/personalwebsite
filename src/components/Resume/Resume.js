import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { GridContainer } from '../Projects/ProjectsStyles';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, MobileDownload, ResumeViewer } from './ResumeStyles';
import { DiBootstrap } from 'react-icons/di';
const Resume = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Resume</SectionTitle>
    <p>
    {/* <ResumeViewer className='resume-view d-none d-md-inline' >
        <div className='row justify-content-md-center'>
    <iframe src="MacLarenScottResume.pdf"  height="100" width ="100"></iframe>
        </div>
    </ResumeViewer> */}
    <br/>

    <h2 className=' resume-mobile d-inline d-md-none'>Click <a target="_blank" href = "MacLarenScottResume.pdf">here</a> to download resume</h2>
      <small>Last Updated: April 4, 2023</small>
    </p>
    {/* PDF of resume here */}
    
    
    <SectionDivider colorAlt />
  </Section>
);

export default Resume;
