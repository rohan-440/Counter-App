import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';

export default function CongratCard() {
    const [data, setData] = useState(0);
    const INC = () => {
        return setData(data + 1);
    }
    const DEC = () => {
        return setData(data - 1);
    }
    const Reset = () => {
        return setData(0);
    }
    return (
        <Card
            data-resizable
            sx={{
                textAlign: 'center',
                alignItems: 'center',
                width: 343,
                // to make the demo resizable
                overflow: 'auto',
                resize: 'horizontal',
                '--icon-size': '100px',
            }}
        >
            <CardOverflow variant="solid" color="warning">
                <AspectRatio
                    variant="outlined"
                    color="warning"
                    ratio="1"
                    sx={{
                        m: 'auto',
                        transform: 'translateY(50%)',
                        borderRadius: '50%',
                        width: 'var(--icon-size)',
                        boxShadow: 'sm',
                        bgcolor: 'background.surface',
                        position: 'relative',
                    }}
                >
                    <div>
                        <h1>{data}</h1>
                    </div>
                </AspectRatio>
            </CardOverflow>
            <Typography level="h2" fontSize="xl" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                Counter
            </Typography>
            <CardContent sx={{ maxWidth: '40ch' }}>
                You can use this for fun
            </CardContent>
            <CardActions
                orientation="vertical"
                buttonFlex={1}
                sx={{
                    '--Button-radius': '40px',
                    width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
                }}
            >
                <Button onClick={INC} variant="solid" color="warning">
                    Increment
                </Button>
                <Button onClick={DEC} variant="solid" color="warning">
                    Decrement
                </Button>
                <Button onClick={Reset} variant="solid" color="warning">
                    Reset
                </Button>
            </CardActions>
        </Card>
    );
}