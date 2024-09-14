import React, { useMemo } from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, timelineOppositeContentClasses, TimelineSeparator } from '@mui/lab';
import dayjs from 'dayjs';
import { Box, Typography } from '@mui/material';

const listExperenceWork = [
    {
        company:'BcY Computación C.A.',
        dateInit:dayjs('09-07-2023', 'DD-MM-YYYY'),
        text:`Development of a Help Center in BcY Computación, where through a web application dynamic Help Centers can be created depending on the user's needs.\nDevelopment of a Support Center app where users can manage tasks and assistance, aimed especially at the Call Center, allowing for orderly and efficient management of coordination with attendees, allowing the generation of attendee performance reports along with the number of assistance attended, In addition to providing flexibility when creating a user, it shows granting specific permissions to each user depending on the needs of the coordinator.`,
        dateFinish:dayjs(),
    },
]
const ExperenceWork = () => {
    const sortedExperiences = useMemo(() => {
        return [...listExperenceWork].sort((a, b) => 
            a.dateFinish.isBefore(b.dateFinish) ? -1 : 1
        );
    }, [])
    return (
        <Box mt={10}>
            <Typography variant="subtitle1" textAlign='center' sx={{color:'#fff', fontSize:32}}>
                Work Experience
            </Typography>
            <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                    },
                }}
            >
                {sortedExperiences.map((experience, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot />
                            {index < sortedExperiences.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant='subtitle1' color='#fff'>{experience.company}</Typography>
                            <Typography variant='body1' color='#fff'>From: {experience.dateInit.format('MMMM D, YYYY')}</Typography>
                            <Typography variant='body1' color='#fff'>To: {experience.dateFinish.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY') 
                                ? 'Now' 
                                : experience.dateFinish.format('MMMM D, YYYY')}
                            </Typography>
                            <Typography 
                                variant='body1' 
                                color='#fff' 
                                sx={{ whiteSpace: 'pre-wrap' }}
                            >
                                {experience.text}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
}

export default ExperenceWork