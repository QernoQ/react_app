import { useParams } from "react-router";
import { Col, Card, Row, Container } from "react-bootstrap";
import { useOutletContext } from "react-router";

export default function ProfilePage() {
    const { dark, info } = useOutletContext<{
        dark: boolean;
        info: string;
    }>();
    const { profileId } = useParams<{ profileId: string }>();
    const decodedlogin = decodeURIComponent(profileId || '');

    return (
        <Container fluid className={`py-4 ${dark ? "bg-dark text-white" : "bg-light text-dark"}`} style={{ minHeight: '100vh' }}>
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <h1 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '36px', fontFamily: 'Helvetica, Arial, sans-serif', }}>
                        Welcome, {decodedlogin}!
                    </h1>

                    <Card className={`mb-4 ${dark ? "bg-dark text-white" : "bg-white text-dark"}`}>
                        <Card.Img
                            src="/public/info.png"
                            alt="User info"
                            style={{
                                height: '25vh',
                                objectFit: 'cover',
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px',
                            }}
                            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/800x200")}
                        />
                    </Card>

                    <Card className={`${dark ? "bg-dark text-white" : "bg-white text-dark"}`}>
                        <Card.Body>
                            <Card.Title style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                            }}>Description</Card.Title>
                            <Card.Text style={{ fontSize: '18px' }}>
                                {info || 'No description set.'}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
