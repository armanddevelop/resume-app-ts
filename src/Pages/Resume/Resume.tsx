import { QueryBuilderTwoTone } from "@mui/icons-material";
import { Box, Divider, Typography, Link } from "@mui/material";

export const Resume = (): JSX.Element => {
  return (
    <Box className="resume-content">
      <Typography variant="h1" className="title">
        Resume
      </Typography>
      <Typography className="experience-title" variant="h5">
        Experience
      </Typography>
      <div className="resume">
        <Typography className="company-title" variant="h5">
          Globant
        </Typography>
        <div className="position">UI frontend Developer - Ticket Master</div>
        <div className="period-of-time">
          <QueryBuilderTwoTone color="primary" fontSize="small" />
          Sep 2021 - PRESENT
        </div>
        <div className="activities-position">
          <ul>
            <li>
              Support the client{" "}
              <Link
                href="https://www.ticketmaster.com/"
                target="_blank"
                underline="none"
              >
                <b>TicketMaster</b>
              </Link>{" "}
              in all activities related to frontend and also backend
              develompent, working in the stack <b>React</b>, <b>Reflux</b>,{" "}
              <b>SASS</b> and <b>PHP.</b>
            </li>
            <li>
              Technical domumentation and tickets review at <b>Jira.</b>
            </li>
            <li>
              Experience in <b>Agile</b> methodologies.
            </li>
            <li>
              Support <b>MFOL</b> team in Europe markets to develop new
              migration of method of payments.
            </li>
            <li>
              Create new components to implement new payment method called
              Braintree.
            </li>
            <li>
              Work with API rest to consume the Braintree library to process the
              purchase of the constumer
            </li>
            <li>
              Making Unit testing in <b>Jest</b> to keep in 80% the coverage of
              the application.
            </li>
            <li>Make code review to my teammates.</li>
            <li>
              Deploy the branches to differents environments to complete the
              test to QA team.
            </li>
            <li>
              Make the documentacion at <b>Confluence</b> to track important
              informacion about the develop of the applicacion.
            </li>
            <li>
              Support the stakeholders of the client about the new requirements
              necessary to complete the develop
            </li>
            <li>
              Support the backend teammates of other projects inside ticket
              master in <b>React</b> development
            </li>
            <li>
              Keep in contant with the program manager to track the advace of
              the task assigned.
            </li>
            <li>
              Use the klarna library to implemenmt this payment method into UK
              market.
            </li>
            <li>
              Collaborate with differents team to complete the develop of the
              new pages and payment methods
            </li>
          </ul>
        </div>
        <Divider sx={{ marginBottom: "10px" }} />
        <Typography className="company-title" variant="h5">
          Softtek
        </Typography>
        <div className="position">UI frontend Developer - Herbalife</div>
        <div className="period-of-time">
          <QueryBuilderTwoTone color="primary" fontSize="small" />
          Aug 2018 - Agus 2021
        </div>
        <div className="activities-position">
          <ul>
            <li>
              Assinged to my account team like UI developer at{" "}
              <Link
                href="https://www.herbalife.com/"
                target="_blank"
                underline="none"
              >
                <b>Herbalife</b>
              </Link>
            </li>
            <li>
              Troubleshot and bugs fixed, issues in the Front-end to ensure
              smooth operation of the applications working in the stack{" "}
              <b>JavaScript</b>, <b>JQuery</b> and <b>.NET.</b>
            </li>
            <li>
              Develop new Features in JavaScript, jQuery, SASS like referral
              program project.
            </li>
            <li>
              Working under <b>Agiles methodologies.</b>
            </li>
            <li>
              Implement <b>React and React context</b> to develop a new page
              called 2KQualificationsTracker, where the user can track the
              points need to reach more discounts in the herbalife products.
            </li>
            <li>
              Deploy the branches in QA enviroments to complete the test for QA
              team
            </li>
            <li>
              Implement unit testing using <b>Jest</b> in all my account
              projects to track the coverage of all the fronted pages.
            </li>
            <li>
              Configuration the <b>sonarQube</b> tool to show the coverage of
              the differents projects in <b>Team Foundacion Services.</b>
            </li>
            <li>
              fix the pipelines to ensure the correct deployment of a branch.
            </li>
            <li>
              Teach others teammates about <b>React</b> and features to use this
              library.
            </li>
            <li>
              Collaborate with differents team to complete the develop of new
              features in the pages
            </li>
          </ul>
        </div>
        <Divider sx={{ marginBottom: "10px" }} />
        <Typography variant="h5" className="company-title">
          Radio Movil Dipsa
        </Typography>
        <div className="position">Analista de Equipo Terminal - Telcel</div>
        <div className="period-of-time">
          <QueryBuilderTwoTone color="primary" fontSize="small" />
          Feb 2012 - Aug 2018
        </div>
        <div className="activities-position">
          <ul>
            <li>
              Work in one of the most famous carries in Mexico called{" "}
              <Link
                href="https://www.telcel.com/"
                target="_blank"
                underline="none"
              >
                <b>Telcel</b>
              </Link>
            </li>
            <li>Manage the warranties of the smartphones to final customer</li>
            <li>
              Implement a new page to keep track the process of warranties of
              IPhones using a form where the teammates enter the information
              about the costumer , this form were developed with{" "}
              <b>JavaScript</b> and <b>JQuery.</b>
            </li>
            <li>
              Give support to the final customer with the configuration and use
              of the smartphones
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
};
