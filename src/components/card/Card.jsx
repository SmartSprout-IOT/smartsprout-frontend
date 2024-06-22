import { useTheme } from '@emotion/react';
import { CardHeader, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};

function CardComponent ({
    border = true,
    boxShadow,
    children,
    content = true,
    contentSX = {},
    darkTitle,
    elevation,
    secondary,
    shadow,
    sx={},
    title,
    ...others

}){

    return(
        <Card
            elevation={elevation || 0}

            {...others}
            sx={{
                border: border ? '1px solid' : 'none',
                borderRadius: 2,
                borderColor: 'gray',

                ...sx
              }}
        >

            {!darkTitle && title && <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} />}
            {darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />}


            {content && <CardContent sx={contentSX}>{children}</CardContent>}
            {!content && children}

        </Card>
    )
}

export default CardComponent;