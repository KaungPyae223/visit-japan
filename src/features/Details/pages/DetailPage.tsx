import Container from "../../../components/Container";
import DetailAbout from "../components/DetailAbout";
import DetailHeader from "../components/DetailHeader";
import DetailInfo from "../components/DetailInfo";

const DetailPage = () => {
  return (
    <Container className="mt-12">
      <DetailHeader />
      <DetailAbout />
      <DetailInfo />
    </Container>
  );
};

export default DetailPage;
