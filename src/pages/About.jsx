import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{""}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Shishir D
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Computer Science and Engineering student at N.M.A.M Institute of
          Technology, Nitte, who builds and supports full-stack applications end
          to end — REST APIs, relational databases and Python microservices — and
          has handled ICT infrastructure work and first-line technical
          troubleshooting in an industry setting.
        </p>
        <p>
          Grounded in Data Structures &amp; Algorithms, Operating Systems,
          Computer Networks and DBMS, with a habit of writing secure,
          well-documented code — JWT authentication, role-based access control
          and pytest coverage are part of how I ship, not an afterthought.
        </p>
        <p>
          I work fast in small collaborative teams under tight deadlines. Outside
          of code I enjoy reading tech blogs and exploring nature, and I'm always
          eager to take on new challenges that help me grow both personally and
          professionally.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Hands-on experience from internships in ICT infrastructure and space
            systems, alongside academic and personal projects. Here's my journey
            so far!
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Education.</h3>
        <div className='mt-5 flex flex-col gap-1 text-slate-500'>
          <p className='text-black-500 font-semibold'>
            N.M.A.M Institute of Technology, Nitte — Karnataka, India
          </p>
          <p>
            B.Tech in Computer Science and Engineering · Expected 2027 · CGPA
            8.53 / 10 (till 6th semester)
          </p>
          <p className='text-sm'>
            Coursework: Data Structures &amp; Algorithms, OOP, Operating Systems,
            Computer Networks (TCP/IP, HTTP), DBMS, Algorithm Analysis, Machine
            Learning
          </p>
        </div>
      </div>

      <div className='pb-10 flex flex-col'>
        <h3 className='subhead-text'>Leadership &amp; Achievements.</h3>
        <ul className='mt-5 list-disc ml-5 space-y-3 text-slate-500'>
          <li>
            <span className='text-black-500 font-semibold'>
              Technical Team Member — Incridea 2026
            </span>
            , NMAMIT Nitte (Feb – Mar 2026). Led a sub-team of 3–4 developers to
            build and deploy the official fest website "Dimensional Drift" for
            3000+ users, handling live bug fixes and holding zero downtime at
            peak registration.
          </li>
          <li>
            <span className='text-black-500 font-semibold'>
              Team Captain — National-Level Boeing Aeromodelling Competition
            </span>
            , Aeroclub Nitte (Mar – May 2024). Captained Team Niladrija to 3rd
            place at both the Zonals (IIT Kanpur) and the National Finals (RVCE
            Bengaluru).
          </li>
        </ul>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
