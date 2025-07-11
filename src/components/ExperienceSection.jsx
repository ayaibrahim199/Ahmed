import React from 'react';

const experiences = [
    {
        position: 'Dynamics 365 F&O Techno-Functional Consultant',
        company: 'Tejoury, KSA',
        duration: 'Aug 2021 – Present',
        description: `
          • Microsoft Dynamics AX 2012 R3 and Dynamics 365 F&O Developer.
          • Project Manager for Dynamics 365 F&O during Go-Live phase.
          • Provided user support in Finance, Supply Chain, Project Management, HR, and Payroll.
          • Designed, developed, and implemented Dynamics 365 F&O security roles and permissions.
        `,
      },
      
      {
        position: 'Dynamics AX 2012 Techno-Functional Consultant',
        company: 'Al Dhowayan Group, KSA (Remote)',
        duration: '2017 – 2019',
        description: `
          • Developed and supported Microsoft Dynamics AX 2012 R3 solutions.
          • Installed and configured all aspects of Microsoft Dynamics AX infrastructure.
          • Built Power BI reports for enhanced business intelligence and reporting.
          • Provided user support for Finance, Supply Chain, and Project Management modules.
          • Designed, developed, tested, and implemented AX security roles and permissions.
          • Deployed and configured SSRS, SSAS, and OLAP cubes to enhance BI functionality.
        `,
      },
      
      {
        position: 'Dynamics AX 2012 Administrator',
        company: 'Masskar Hypermarket, Qatar',
        duration: '2016 – 2018',
        description: `
          • Administered and maintained Microsoft Dynamics AX 2012 R3 environment.
          • Installed and configured all aspects of Microsoft Dynamics AX, including Retail modules.
          • Developed Power BI reports for enhanced business intelligence and decision-making.
          • Provided user support and configuration for Finance, Supply Chain, and Retail Management.
          • Implemented, configured, customized, and troubleshooted AX 2012 R3 for Retail operations.
          • Created and modified organizational hierarchies, Retail POS setups, and offline profiles.
          • Delivered daily end-user support to regional companies and business units.
          • Designed, developed, tested, and implemented AX security roles and permissions.
          • Deployed and configured SSRS, SSAS, and OLAP cubes to enhance BI capabilities.
          • Gained solid knowledge in Dynamics 365 Finance and Operations.
        `,
      },
      {
        position: 'Microsoft Dynamics AX 2012 Consultant',
        company: 'First Technology (Microsoft Partner), KSA',
        duration: 'Oct 2015 – Jan 2017',
        description: `
          • Delivered full life cycle implementations of Microsoft Dynamics AX 2012, including analysis, design, testing, go-live, and post-implementation support.
          • Installed and configured all aspects of Microsoft Dynamics AX infrastructure and modules.
          • Designed, developed, tested, and implemented AX security roles and permissions.
          • Deployed and configured SSRS, SSAS, and OLAP cubes to enhance business intelligence and reporting.
          • Installed and configured DMF tools and other system utilities.
          • Performed system administration: user accounts, security roles, profiles, and environment management.
          • Provided daily end-user support for AX across multiple regional business units.
          • Implemented, configured, customized, and troubleshooted AX 2012 R3 for Retail operations.
          • Set up and maintained Retail POS systems, organization hierarchies, functionality profiles, offline profiles, and address books.
          • Managed retail products, variants, barcodes, assortments, pricing structures, and discount configurations.
          • Customized POS sales order and invoice cycle to support Arabic printing layouts.
          • Administered AOS, Database, Synchronization, and Real-Time Service profiles.
          • Provided Active Directory (AD) administration and overall AX environment management in a multi-instance setup.
        `,
      },
      
      
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Experience</h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-1">{exp.position}</h3>
            <p className="text-gray-600 font-medium">{exp.company}</p>
            <p className="text-gray-500 italic mb-3">{exp.duration}</p>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
