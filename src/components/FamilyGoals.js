import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function FamilyGoals() {

    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
        clearInterval(timer);
        };
    }, []);


    return (
        <div className='FamilyGoalsCard'>
            <div className='FamilyGoalsCardTop'>
                <h1>Family Goals</h1>
            </div>
            <div className='FamilyGoalsCardBottom'>
                <div className='FamilyGoalsCardBottomItem'>
                    <CircularProgress variant="determinate" value={75} size={20} />
                    <p>Workout together as family 50 times</p>
                </div>
                <div className='FamilyGoalsCardBottomItem'>
                    <CircularProgress variant="determinate" value={30} size={20} />
                    <p>Be nudged by family member 50 times</p>
                </div>
                <div className='FamilyGoalsCardBottomItem'>
                    <CircularProgress variant="determinate" value={60} size={20} />
                    <p>Video-call workout 10 times</p>
                </div>
                <div className='FamilyGoalsCardBottomItem'>
                    <CircularProgress variant="determinate" value={100} size={20} />
                    <p>Share app with 4 families</p>
                </div>
            </div>
        </div>
    );
}; 

export default FamilyGoals;


// https://mui.com/material-ui/react-progress/