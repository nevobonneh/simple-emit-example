import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const useStyles = makeStyles({
    'icon-1': { color: 'red' },
    'icon-2': { color: 'coral' },
    'icon-3': { color: 'orange' },
    'icon-4': { color: 'skyblue' },
  });

const CustomRating = (props:Props) => {
    const { value } = props;
    const classes: any = useStyles();

    return (
        <Box
        sx={{
            '& > legend': { mt: 2 },
        }}
        >
            <Rating
                classes={{iconFilled: classes[`icon-${value}`]}}
                name="customized-color"
                size={"small"}
                max={4}
                value={value}
                getLabelText={(value: number) => `${value} Circles${value !== 1 ? 's' : ''}`}
                precision={1}
                icon={<CircleIcon fontSize="inherit" />}
                emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
                readOnly
            />
        </Box>
    );
}

interface Props{
    value: number
}

export default CustomRating;