import { Grid, styled, Container, Typography, Button} from "@mui/material"
import Avatar3 from "../../../../assets/images/avatar3.png"

const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",
        padding: "32px",
        borderRadius: "24px",
        color: "white",
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        maxWidth: "300px",
        borderRadius: "5%",
        display: "block",
        margin: "0 auto 24px",
    }))

    return (
        <>
        <StyledHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <StyledImg src={Avatar3}/>
                    </Grid>

                <Grid size={8}>
                    <Typography variant="h1">Eduardo Costa</Typography>
                    <Typography variant="h2">Desenvolvedor Front-end</Typography>
                    <Button>Download CV</Button>
                    <Button>MEU Contato</Button>
                </Grid>
            </Grid>

            </Container>
        </StyledHero>
        </>
    )
}

export default Hero
