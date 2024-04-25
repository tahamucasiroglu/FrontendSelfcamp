import {Typography} from '@mui/material'

export default function LessonTypography() {
  return (
    <div>
        <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique commodi, ea natus ducimus magnam voluptatibus maiores autem deserunt unde quas veniam rem nemo, sed voluptas rerum laborum aperiam aliquid praesentium?
        </Typography>

        <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique commodi, ea natus ducimus magnam voluptatibus maiores autem deserunt unde quas veniam rem nemo, sed voluptas rerum laborum aperiam aliquid praesentium?
        </Typography>

        <Typography variant='h1'>h1 yazısı</Typography>
        <Typography variant='h2'>h2 yazısı</Typography>
        <Typography variant='h3'>h3 yazısı</Typography>
        <Typography variant='h4'>h4 yazısı</Typography>
        <Typography variant='h5'>h5 yazısı</Typography>
        <Typography variant='h6'>h6 yazısı</Typography>

        <Typography variant='h1' component='h4'> başlık</Typography>

    </div>
  )
}
