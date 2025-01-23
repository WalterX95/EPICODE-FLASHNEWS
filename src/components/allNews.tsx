import { Container, Col, Row, Card, Button } from "react-bootstrap";
interface news {

}
const allNews = (news : news) => {
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col xs={12} md={8}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://placeholdercats.com/600/600" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default allNews;