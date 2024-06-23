import { Box, Grid, Stack, Typography } from "@mui/material";
import CardComponent from "../card/Card";

export default function CropFieldSensor({color='primary',title, number, percentage}){
    return(
        <CardComponent contentSX={{p: 2.25}}>
            <Stack spacing={0.5}>
                <Typography variant="h6" color={"GrayText"}>
                    {title}
                </Typography>
                <Grid container alignItems={"center"}>
                    <Grid item>
                        <Typography variant="h4" color="inherit">
                            {number}
                        </Typography>
                    </Grid>
                </Grid>
            </Stack>
            <Box sx={{pt:2.25}}>
                <Typography variant="caption" color="text.secondary">
                    <Typography variant="caption" sx={{color: `${color || 'primary'}.main`}}>
                        {percentage}
                    </Typography>
                </Typography>
            </Box>
        </CardComponent>
    )
}
