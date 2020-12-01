import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Info from "@material-ui/icons/Info";
import Build from "@material-ui/icons/Build";
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import InfoCard from "./InfoCard";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <GridContainer>
            <GridItem xs={12}>
              <NavPills
                color="info"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 3, lg: 2 },
                  contentGrid: { xs: 12, sm: 8, md: 9, lg: 10 }
                }}
                tabs={[
                  {
                    tabButton: "Services",
                    tabIcon: Build,
                    tabContent: (
                      <div className={classes.tab}>
                        <InfoCard 
                          cardTitle="INSTALLATION & RELOCATION" 
                          cardContent="Full turnkey relocation and installation of any industrial or commercial equipment, including civil works"
                        />
                        <InfoCard 
                          cardTitle="ALIGNMENTS" 
                          cardContent="High quality alignments, including laser alignments"
                        />
                        <InfoCard 
                          cardTitle="CAD DESIGN" 
                          cardContent="Full design and drafting support"
                        />
                        <InfoCard 
                          cardTitle="CYLINDER HONING" 
                          cardContent={
                            <div>
                              <div>Inner diameter and length of tube able to be honed:</div>
                              <ul>
                                <li>
                                  From I.D. 30mm/1.7/32 to I.D. 35mm/1.3/8 x 2200mm long
                                </li>
                                <li>
                                  From I.D. 36mm/1.27/64 to I.D. 50mm/2 x 5500mm long
                                </li>
                                <li>
                                  From I.D. 45mm/1.3/4 to I.D. 533mm/21 x 5500mm long"
                                </li>
                              </ul>
                            </div>
                          }
                        />
                        <InfoCard 
                          cardTitle="MACHINING" 
                          cardContent="Full machine shop facilities available"
                        />
                        <InfoCard 
                          cardTitle="KNIVES" 
                          cardContent="Knife adjustments, guillotine and sheeter knife changes"
                        />
                        <InfoCard 
                          cardTitle="SERVICE & REPAIR" 
                          cardContent="Service personnel available for onsite and workshop maintenance and repair"
                        />
                        <InfoCard 
                          cardTitle="HYDRAULIC FACILITIES" 
                          cardContent="Our test rig is capable of testing hydraulic motors, pumps and cylinders up to 3500 psi"
                        />
                        <InfoCard 
                          cardTitle="FABRICATION" 
                          cardContent="Large or small fabrications made from the design stage to commisioning"
                        />
                      </div>
                    )
                  },
                  {
                    tabButton: "Gallery",
                    tabIcon: PhotoAlbumIcon,
                    tabContent: (
                      <SectionCarousel />
                    )
                  },
                  {
                    tabButton: "About",
                    tabIcon: Info,
                    tabContent: (
                      <span>
                        <p className={classes.infoText}>
                          Brisford Pty Ltd was established in 1988 by Derek Hichisson, and is located 
                          in Keysborough, Victoria, Australia.
                        </p>
                        <br />
                        <p className={classes.infoText}>
                          Derek commenced his apprenticeship in 1966, with Masson Scott in London. As part 
                          of his apprenticeship he was trained in the manufacture of winders and sheeters 
                          and and other equipment designed by Mason Scott and predominantly used in the paper 
                          industry.
                        </p>
                        <br />
                        <p className={classes.infoText}>
                          As an integral part of his training he spent considerable time being trained for 
                          high quality installation and commissioning of equipment by Masson Scott. 
                          Travelling overseas between 1971 - 1983 to Australia, New Zealand, Africa, India, 
                          whilst based in Scandinavia (as the centre of the paper industry), he utilised his 
                          extensive training to carry out installation and commissioning of new equipment, 
                          the upgrading and maintenance of equipment throughout these countries.
                        </p>
                        <br />
                        <p className={classes.infoText}>
                          During 1983 - 1988 he transferred to Molins Australia and continued with his 
                          involvement of servicing all the paper industry throughout Australia, New Zealand 
                          and New Guinea and Asia.
                        </p>
                        <br />
                        <p className={classes.infoText}>
                          Derek commenced Brisford Pty Ltd in 1988, and he continued his heavy involvement 
                          within the paper industry throughout South East Asia. Brisford Pty Ltd now has a 
                          dedicated team with many years of combined experience and expertise in Mechanical 
                          Engineering, Pneumatic & Hydraulic systems design and repairs, and Design Drafting 
                          and other varied facets of engineering.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
