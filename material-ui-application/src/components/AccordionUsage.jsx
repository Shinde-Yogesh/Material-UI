import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography> 
        </AccordionSummary>
          <AccordionDetails>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius earum expedita inventore dolor, voluptatem ipsa saepe culpa. Minima perspiciatis quisquam neque. Laborum autem in tempora quasi tenetur ut voluptates?
              At consectetur, quibusdam iste quo maxime ullam reprehenderit temporibus dignissimos fugit consequatur commodi repellendus eius praesentium sunt deserunt tempora.
              </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography> 
        </AccordionSummary>
          <AccordionDetails>
           <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius earum expedita inventore dolor, voluptatem ipsa saepe culpa. Minima perspiciatis quisquam neque. Laborum autem in tempora quasi tenetur ut voluptates?
              At consectetur, quibusdam iste quo maxime ullam reprehenderit temporibus dignissimos fugit consequatur commodi repellendus eius praesentium sunt deserunt tempora.
              </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Accordion 3</Typography> 
        </AccordionSummary>
          <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius earum expedita inventore dolor, voluptatem ipsa saepe culpa. Minima perspiciatis quisquam neque. Laborum autem in tempora quasi tenetur ut voluptates?
              At consectetur, quibusdam iste quo maxime ullam reprehenderit temporibus dignissimos fugit consequatur commodi repellendus eius praesentium sunt deserunt tempora.
              </Typography>
          </AccordionDetails>
      </Accordion>
    </div>
  );
}
